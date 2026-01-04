

const GITHUB_USERNAME = 'Taedj';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const HEADERS = {
  ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
  Accept: 'application/vnd.github.v3+json',
};

const RAW_HEADERS = {
  ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
  Accept: 'application/vnd.github.v3.raw',
};

export interface ProjectConfig {
  name: string;
  slug: string;
  brand: string;
  category: string;
  status: string;
  brandLogo?: string;
}

export interface Chapter {
  title: string;
  description: string;
  image: string;
  styles: {
    imgWidth: number;
    imgOffsetY: number;
    imgScale: number;
  };
  translations?: {
    ar?: { title: string; description: string };
    fr?: { title: string; description: string };
  };
  videoLink?: string;
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  translations?: {
    ar?: { name: string; subtitle: string; price: string; features: string[] };
    fr?: { name: string; subtitle: string; price: string; features: string[] };
  };
}

export interface ProjectStyles {
  heroTitleSize: number;
  finalCtaTitleSize: number;
  buttonPaddingX: number;
  buttonPaddingY: number;
  buttonTextSize: number;
  sectionSpacing: number;
  borderRadius: number;
  brandLogo: string;
  heroBackground: string;
  heroImgWidth: number;
  heroImgOffsetY: number;
  heroImgScale: number;
  heroVideoWidth: number;
  heroVideoHeight: number;
  fontScale: number;
  heroSubtitleSize: number;
  chapterTitleSize: number;
  chapterDescSize: number;
  pricingNameSize: number;
  reportTitleSize: number;
  reportTextSize: number;
  heroVideoLink?: string;
  heroType?: 'mobile' | 'web' | 'desktop';
}

export interface ProjectDetails {
  config: ProjectConfig;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimaryLabel: string;
    ctaPrimaryLink: string;
    ctaSecondaryLabel: string;
    ctaSecondaryLink: string;
    image: string;
    translations?: {
      ar?: { title: string; subtitle: string; ctaPrimaryLabel: string; ctaSecondaryLabel: string };
      fr?: { title: string; subtitle: string; ctaPrimaryLabel: string; ctaSecondaryLabel: string };
    };
  };
  chapters: Chapter[];
  vision: string;
  visionTranslations?: {
    ar?: string;
    fr?: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    translations?: {
      ar?: { title: string; subtitle: string; buttonLabel: string };
      fr?: { title: string; subtitle: string; buttonLabel: string };
    };
  };
  styles: ProjectStyles;
  pricing: PricingPlan[];
  remotePricing?: Record<string, unknown>;
  report?: {
    en: string;
    ar: string;
    fr: string;
  };
  debug?: {
    branch: string;
    repoName: string;
  };
}

interface GitHubRepo {
  name: string;
  description: string | null;
  updated_at: string;
  default_branch: string;
  private: boolean;
}

interface GistPricingResponse {
  pricing: Record<string, unknown>;
}

/**
 * Helper to fetch file content from GitHub API
 */
async function fetchGitHubFile(repo: string, path: string, branch: string = 'master'): Promise<{ content: string; ok: boolean; url: string }> {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/${path}?ref=${branch}`;
  try {
    const res = await fetch(url, {
      headers: RAW_HEADERS,
      cache: 'no-store'
    });
    if (!res.ok) return { content: '', ok: false, url };
    const content = await res.text();
    return { content, ok: true, url };
  } catch {
    return { content: '', ok: false, url };
  }
}

/**
 * Helper to get raw URL for images (works for public, for private it needs token in URL or proxy)
 * For now, we use the raw.githubusercontent.com with token if available, or just the URL.
 * Note: raw.githubusercontent.com supports ?token=... but it's ephemeral. 
 * Better to use the API and convert to base64 if private, but that's heavy.
 * For this Hub, we'll assume images are accessible if the browser has access or use a proxy.
 */
function getRawAssetUrl(repo: string, path: string, branch: string = 'master'): string {
  // If we have a token, we could technically proxy this, but for now we'll provide the standard raw URL.
  // Private repo images will need the repo to be public OR a proxy implemented in the Next.js API.
  return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/${branch}/${path}`;
}

/**
 * Helper to fetch repo info to get the correct default branch
 */
async function getRepoInfo(repoName: string): Promise<GitHubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
      headers: HEADERS,
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json() as GitHubRepo;
  } catch {
    return null;
  }
}

/**
 * Fetches all projects that have a CONTROL_WEBSITE folder
 */
export async function getProjects() {
  try {
    // If token is present, we use /user/repos to get all repos (including private). 
    // Otherwise we use /users/Taedj/repos for public only.
    const url = GITHUB_TOKEN
      ? `https://api.github.com/user/repos?per_page=100&sort=updated&type=owner`
      : `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

    console.log(`[GITHUB] Using Token: ${GITHUB_TOKEN ? 'YES' : 'NO'}`);
    console.log(`[GITHUB] URL: ${url}`);

    const reposRes = await fetch(url, {
      headers: HEADERS,
      cache: 'no-store'
    });

    if (!reposRes.ok) {
      console.error('GitHub API error:', reposRes.status, await reposRes.text());
      return [];
    }
    const repos = await reposRes.json() as GitHubRepo[];
    console.log(`[GITHUB] Found ${repos.length} repositories`);

    const projectPromises = repos.map(async (repo: GitHubRepo) => {
      try {
        const branch = repo.default_branch || 'master';

        const [configData, mdData] = await Promise.all([
          fetchGitHubFile(repo.name, 'CONTROL_WEBSITE/product.config.json', branch),
          fetchGitHubFile(repo.name, 'CONTROL_WEBSITE/WEBSITE.md', branch)
        ]);

        if (configData.ok && mdData.ok) {
          console.log(`[GITHUB] Found valid project: ${repo.name}`);
          const config = JSON.parse(configData.content) as ProjectConfig;
          const mdContent = mdData.content;
          const subtitle = extractValue(mdContent, 'Subtitle:', 'Hero Section');

          // Detect thumbnail image from UI & Styling section
          const cardImage = extractValue(mdContent, 'Card Image:', 'UI & Styling') || 'card.png';
          let cardPath = `CONTROL_WEBSITE/screenshots/${cardImage}`;

          // Validate existence for fallback casing or missing file
          const cardCheck = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents/${cardPath}?ref=${branch}`, {
            method: 'HEAD',
            headers: HEADERS,
            cache: 'no-store'
          });

          if (!cardCheck.ok) {
            // Fallback to standard names if specified file is missing
            cardPath = 'CONTROL_WEBSITE/screenshots/card.png';
            const fallbackCheck = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents/${cardPath}?ref=${branch}`, {
              method: 'HEAD',
              headers: HEADERS,
              cache: 'no-store'
            });
            if (!fallbackCheck.ok) cardPath = 'CONTROL_WEBSITE/screenshots/Card.png';
          }

          // Important: For private repos, raw.githubusercontent.com won't work in the browser.
          // We'll need an image proxy route. For now, we'll return the URL.
          const imageLink = repo.private
            ? `/api/projects/${repo.name}/image?path=${cardPath}&branch=${branch}`
            : getRawAssetUrl(repo.name, cardPath, branch);

          return {
            name: config.name || repo.name,
            slug: repo.name,
            category: config.category || 'Software',
            brand: config.brand || 'Taedj Dev',
            status: config.status || 'active',
            description: subtitle || repo.description || 'No description available',
            image: imageLink,
            thumbnail: imageLink,
            imageUrl: imageLink,
            lastUpdated: repo.updated_at
          };
        }
      } catch {
        return null;
      }
      return null;
    });

    const results = await Promise.all(projectPromises);
    return results.filter((p): p is NonNullable<typeof p> => p !== null);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

/**
 * Splits content by language tags [EN], [AR], [FR]
 */
function splitByLanguage(content: string): Record<string, string> {
  const languages: Record<string, string> = {};
  const tags = ['[EN]', '[AR]', '[FR]'];

  // If no tags found, assume entire content is English
  if (!tags.some(tag => content.includes(tag))) {
    languages.en = content;
    return languages;
  }

  let currentLang = '';
  let currentContent: string[] = [];

  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    const tagMatch = tags.find(tag => trimmed.includes(tag));

    if (tagMatch) {
      if (currentLang) {
        languages[currentLang] = currentContent.join('\n').trim();
      }
      currentLang = tagMatch.replace('[', '').replace(']', '').toLowerCase();
      currentContent = [];
    } else if (currentLang) {
      currentContent.push(line);
    }
  }

  if (currentLang) {
    languages[currentLang] = currentContent.join('\n').trim();
  }

  return languages;
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetails | null> {
  try {
    const repoInfo = await getRepoInfo(slug);
    if (!repoInfo) return null;

    const branch = repoInfo.default_branch || 'master';
    const gistUrl = 'https://gist.githubusercontent.com/Taedj/9bf1dae53f37681b9c13dab8cde8472f/raw/config.json';

    const [configData, mdData, reportData, gistRes] = await Promise.all([
      fetchGitHubFile(slug, 'CONTROL_WEBSITE/product.config.json', branch),
      fetchGitHubFile(slug, 'CONTROL_WEBSITE/WEBSITE.md', branch),
      fetchGitHubFile(slug, 'CONTROL_WEBSITE/REPORT.md', branch),
      fetch(gistUrl, { cache: 'no-store' }).catch(() => null)
    ]);

    if (!configData.ok || !mdData.ok) return null;

    const config = JSON.parse(configData.content) as ProjectConfig;
    const mdContent = mdData.content;
    const remotePricingResponse = gistRes && gistRes.ok ? await gistRes.json() as GistPricingResponse : null;

    // Localized blocks
    const localizedBlocks = splitByLanguage(mdContent);
    const enContent = localizedBlocks.en || mdContent;
    const arContent = localizedBlocks.ar;
    const frContent = localizedBlocks.fr;

    // Asset logic for private repos
    const getAssetUrl = (path: string) => {
      return repoInfo.private
        ? `/api/projects/${slug}/image?path=CONTROL_WEBSITE/screenshots/${path}&branch=${branch}`
        : getRawAssetUrl(slug, `CONTROL_WEBSITE/screenshots/${path}`, branch);
    };

    const heroVideoLink = extractValue(mdContent, 'Hero Video Link:', 'UI & Styling');
    let heroAsset = extractValue(mdContent, 'Hero Image:', 'UI & Styling');
    let heroImage = '';

    // Helper to get YouTube ID
    const getYouTubeId = (url: string) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    };

    // Try to get YouTube thumbnail if link exists and no specific image set (or we want to prioritize it?)
    // User request: "fetch cover from youtube direct link i set it in website.md"
    // We'll prioritize custom image if set, otherwise fallback to YouTube thumb, then cover.mp4/png
    if (heroVideoLink && !heroAsset) {
      const videoId = getYouTubeId(heroVideoLink);
      if (videoId) {
        heroImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    }

    if (!heroImage) {
      heroAsset = heroAsset || 'cover.mp4';

      // Validate existence via API for private repo branch consistency
      const heroCheck = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${slug}/contents/CONTROL_WEBSITE/screenshots/${heroAsset}?ref=${branch}`, {
        method: 'HEAD',
        headers: HEADERS,
        cache: 'no-store'
      });

      if (!heroCheck.ok && !extractValue(mdContent, 'Hero Image:', 'UI & Styling')) {
        // If Hero Image was not specified in MD and cover.mp4 failed, try cover.png
        heroAsset = 'cover.png';
      }
      heroImage = getAssetUrl(heroAsset);
    }

    const logo = extractValue(enContent, 'Brand Logo:', 'UI & Styling');
    const background = extractValue(enContent, 'Hero Background:', 'UI & Styling');

    const heroParse = (content: string) => ({
      title: extractValue(content, 'Title:', 'Hero Section'),
      subtitle: extractValue(content, 'Subtitle:', 'Hero Section'),
      ctaPrimaryLabel: extractValue(content, 'CTA Primary Label:', 'Hero Section') || 'Download Now',
      ctaSecondaryLabel: extractValue(content, 'CTA Secondary Label:', 'Hero Section') || 'Learn More',
    });

    const finalCtaParse = (content: string) => ({
      title: extractValue(content, 'Title:', 'Final CTA'),
      subtitle: extractValue(content, 'Subtitle:', 'Final CTA'),
      buttonLabel: extractValue(content, 'Button Label:', 'Final CTA') || 'Get Started',
    });

    const enHero = heroParse(enContent);
    const enChapters = parseChapters(enContent, slug, branch, repoInfo.private);
    const enVision = extractValue(enContent, 'Caption:', 'Demo & Vision');
    const enFinalCta = finalCtaParse(enContent);
    const enPricing = parsePricing(enContent);

    const details: ProjectDetails = {
      config: { ...config, slug },
      hero: {
        ...enHero,
        ctaPrimaryLink: extractValue(enContent, 'CTA Primary Link:', 'Hero Section') || '#',
        ctaSecondaryLink: extractValue(enContent, 'CTA Secondary Link:', 'Hero Section') || '#',
        image: heroImage,
        translations: {}
      },
      chapters: enChapters,
      vision: enVision,
      visionTranslations: {},
      finalCta: {
        ...enFinalCta,
        buttonLink: extractValue(enContent, 'Button Link:', 'Final CTA') || '#',
        translations: {}
      },
      styles: {
        heroTitleSize: parseInt(extractValue(mdContent, 'Hero Title Size:', 'UI & Styling')) || 120,
        finalCtaTitleSize: parseInt(extractValue(mdContent, 'Final CTA Title Size:', 'UI & Styling')) || 160,
        buttonPaddingX: parseInt(extractValue(mdContent, 'Button Padding X:', 'UI & Styling')) || 64,
        buttonPaddingY: parseInt(extractValue(mdContent, 'Button Padding Y:', 'UI & Styling')) || 32,
        buttonTextSize: parseInt(extractValue(mdContent, 'Button Text Size:', 'UI & Styling')) || 32,
        sectionSpacing: parseInt(extractValue(mdContent, 'Section Spacing:', 'UI & Styling')) || 160,
        borderRadius: parseInt(extractValue(mdContent, 'Border Radius:', 'UI & Styling')) || 32,
        brandLogo: logo ? getAssetUrl(logo) : '',
        heroBackground: background ? getAssetUrl(background) : '',
        heroImgWidth: parseInt(extractValue(mdContent, 'Hero Img Width:', 'UI & Styling')) || 100,
        heroImgOffsetY: parseInt(extractValue(mdContent, 'Hero Img Offset Y:', 'UI & Styling')) || 0,
        heroImgScale: parseInt(extractValue(mdContent, 'Hero Img Scale:', 'UI & Styling')) || 100,
        heroVideoWidth: parseInt(extractValue(mdContent, 'Hero Video Width (px):', 'UI & Styling')) || 0,
        heroVideoHeight: parseInt(extractValue(mdContent, 'Hero Video Height (px):', 'UI & Styling')) || 0,
        fontScale: parseInt(extractValue(mdContent, 'Font Scale:', 'UI & Styling')) || 100,
        heroSubtitleSize: parseInt(extractValue(mdContent, 'Hero Subtitle Size:', 'UI & Styling')) || 32,
        chapterTitleSize: parseInt(extractValue(mdContent, 'Chapter Title Size:', 'UI & Styling')) || 72,
        chapterDescSize: parseInt(extractValue(mdContent, 'Chapter Desc Size:', 'UI & Styling')) || 30,
        pricingNameSize: parseInt(extractValue(mdContent, 'Pricing Name Size:', 'UI & Styling')) || 30,
        reportTitleSize: parseInt(extractValue(mdContent, 'Report Title Size:', 'UI & Styling')) || 96,
        reportTextSize: parseInt(extractValue(mdContent, 'Report Text Size:', 'UI & Styling')) || 20,
        heroVideoLink: extractValue(mdContent, 'Hero Video Link:', 'UI & Styling'),
        heroType: (extractValue(mdContent, 'Hero Type:', 'UI & Styling') as 'mobile' | 'web' | 'desktop') || 'desktop',
      },
      pricing: enPricing,
      remotePricing: remotePricingResponse?.pricing,
      report: reportData.ok ? parseReport(reportData.content) : undefined,
    };

    // Populate Arabic
    if (arContent) {
      if (details.hero.translations) details.hero.translations.ar = heroParse(arContent);
      if (details.finalCta.translations) details.finalCta.translations.ar = finalCtaParse(arContent);
      details.visionTranslations!.ar = extractValue(arContent, 'Caption:', 'Demo & Vision');

      const arChapters = parseChapters(arContent, slug, branch, repoInfo.private);
      details.chapters.forEach((c, i) => {
        if (arChapters[i]) {
          c.translations = c.translations || {};
          c.translations.ar = { title: arChapters[i].title, description: arChapters[i].description };
        }
      });

      const arPricing = parsePricing(arContent);
      details.pricing.forEach((p, i) => {
        if (arPricing[i]) {
          p.translations = p.translations || {};
          p.translations.ar = { ...arPricing[i] };
        }
      });
    }

    // Populate French
    if (frContent) {
      if (details.hero.translations) details.hero.translations.fr = heroParse(frContent);
      if (details.finalCta.translations) details.finalCta.translations.fr = finalCtaParse(frContent);
      details.visionTranslations!.fr = extractValue(frContent, 'Caption:', 'Demo & Vision');

      const frChapters = parseChapters(frContent, slug, branch, repoInfo.private);
      details.chapters.forEach((c, i) => {
        if (frChapters[i]) {
          c.translations = c.translations || {};
          c.translations.fr = { title: frChapters[i].title, description: frChapters[i].description };
        }
      });

      const frPricing = parsePricing(frContent);
      details.pricing.forEach((p, i) => {
        if (frPricing[i]) {
          p.translations = p.translations || {};
          p.translations.fr = { ...frPricing[i] };
        }
      });
    }

    return details;
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    return null;
  }
}

function extractValue(content: string, key: string, sectionName: string): string {
  const lines = content.split('\n');
  let inSection = !sectionName;
  const targetKey = key.replace(/\*/g, '').replace(/:$/, '').toLowerCase().trim();

  for (const line of lines) {
    const trimmed = line.trim();
    const isHeader = trimmed.startsWith('##') || (trimmed.startsWith('[') && trimmed.endsWith(']'));

    if (sectionName && isHeader && trimmed.toLowerCase().includes(sectionName.toLowerCase())) {
      inSection = true;
      continue;
    }
    if (inSection && isHeader && !trimmed.toLowerCase().includes(sectionName.toLowerCase())) {
      inSection = false;
    }

    if (inSection) {
      const cleanLine = trimmed.replace(/\*/g, '');
      const lowerLine = cleanLine.toLowerCase();
      if (lowerLine.includes(targetKey + ':')) {
        const index = lowerLine.indexOf(targetKey + ':');
        return cleanLine.substring(index + targetKey.length + 1).trim();
      }
    }
  }
  return '';
}

function parseChapters(content: string, slug: string, branch: string, isPrivate: boolean): Chapter[] {
  const chapters: Chapter[] = [];
  const lines = content.split('\n');
  let current: Chapter | null = null;
  let inSection = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## Feature Chapters')) { inSection = true; continue; }
    if (inSection && trimmed.startsWith('## ') && !trimmed.toLowerCase().includes('feature chapters')) inSection = false;

    if (inSection && trimmed.startsWith('### Chapter')) {
      if (current) chapters.push(current);
      current = {
        title: trimmed.split(':')[1]?.trim() || trimmed.replace('### Chapter ', '').trim(),
        description: '', image: '', styles: { imgWidth: 100, imgOffsetY: 0, imgScale: 100 }
      };
    } else if (inSection && current) {
      const cleanLine = trimmed.replace(/\*/g, '');
      const lowerLine = cleanLine.toLowerCase();
      if (lowerLine.startsWith('description:')) current.description = cleanLine.substring(12).trim();
      else if (lowerLine.startsWith('visual hint:')) {
        const fileName = cleanLine.substring(12).trim();
        current.image = isPrivate
          ? `/api/projects/${slug}/image?path=CONTROL_WEBSITE/screenshots/${fileName}&branch=${branch}`
          : getRawAssetUrl(slug, `CONTROL_WEBSITE/screenshots/${fileName}`, branch);
      }
      else if (lowerLine.startsWith('img width:')) current.styles.imgWidth = parseInt(cleanLine.substring(10).trim()) || 100;
      else if (lowerLine.startsWith('img offset y:')) current.styles.imgOffsetY = parseInt(cleanLine.substring(13).trim()) || 0;
      else if (lowerLine.startsWith('img scale:')) current.styles.imgScale = parseInt(cleanLine.substring(10).trim()) || 100;
      else if (lowerLine.startsWith('video link:')) current.videoLink = cleanLine.substring(11).trim();
    }
  }
  if (current) chapters.push(current);
  return chapters;
}

function parsePricing(content: string): PricingPlan[] {
  const plans: PricingPlan[] = [];
  const lines = content.split('\n');
  let inPricing = false;
  let current: PricingPlan | null = null;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## Pricing')) { inPricing = true; continue; }
    if (inPricing && trimmed.startsWith('## ')) inPricing = false;

    if (inPricing && trimmed.toLowerCase().startsWith('### plan:')) {
      if (current) plans.push(current);
      current = { name: trimmed.split(':')[1]?.trim() || trimmed.replace(/### Plan:/i, '').trim(), subtitle: '', price: '', features: [] };
    } else if (inPricing && current) {
      const cleanLine = trimmed.replace(/\*/g, '').trim();
      const lowerLine = cleanLine.toLowerCase();
      if (lowerLine.startsWith('price:')) current.price = cleanLine.split(':').slice(1).join(':').trim();
      else if (lowerLine.startsWith('subtitle:')) current.subtitle = cleanLine.split(':').slice(1).join(':').trim();
      else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) current.features.push(trimmed.substring(2).trim());
    }
  }
  if (current) plans.push(current);
  return plans;
}

function parseReport(content: string) {
  const sections = {
    en: '',
    ar: '',
    fr: ''
  };

  const enMatch = content.match(/\[EN\]([\s\S]*?)(\[AR\]|\[FR\]|$)/i);
  const arMatch = content.match(/\[AR\]([\s\S]*?)(\[EN\]|\[FR\]|$)/i);
  const frMatch = content.match(/\[FR\]([\s\S]*?)(\[EN\]|\[AR\]|$)/i);

  if (enMatch) sections.en = enMatch[1].trim();
  if (arMatch) sections.ar = arMatch[1].trim();
  if (frMatch) sections.fr = frMatch[1].trim();

  return sections;
}
