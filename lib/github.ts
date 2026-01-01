const GITHUB_USERNAME = 'Taedj';
const DEFAULT_BRANCH = 'main';
const BASE_RAW_URL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}`;

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
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
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
  };
  chapters: Chapter[];
  vision: string;
  finalCta: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
  };
  styles: ProjectStyles;
  pricing: PricingPlan[];
  remotePricing?: Record<string, any>;
}

/**
 * Fetches all projects that have a CONTROL_WEBSITE folder
 */
export async function getProjects() {
  try {
    // 1. Fetch repositories from GitHub API
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { cache: 'no-store' });
    if (!reposRes.ok) return [];
    const repos = await reposRes.json() as any[];

    // 2. Check each repo for the config file
    const projectPromises = repos.map(async (repo) => {
      const configUrl = `${BASE_RAW_URL}/${repo.name}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/product.config.json`;
      const mdUrl = `${BASE_RAW_URL}/${repo.name}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/WEBSITE.md`;

      try {
        const [configRes, mdRes] = await Promise.all([
          fetch(configUrl, { cache: 'no-store' }),
          fetch(mdUrl, { cache: 'no-store' })
        ]);

        if (configRes.ok && mdRes.ok) {
          const config = await configRes.json();
          const mdContent = await mdRes.text();
          
          // Extract basic info from MD for the card
          const subtitle = extractValue(mdContent, '**Subtitle:**', 'Hero Section');
          
          // Determine the card image (standardized to card.png or cover.png)
          const cardImageUrl = `${BASE_RAW_URL}/${repo.name}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/screenshots/card.png`;

          return {
            name: config.name || repo.name,
            slug: repo.name,
            category: config.category || 'Software',
            brand: config.brand || 'Taedj Dev',
            status: config.status || 'active',
            description: subtitle || repo.description || 'No description available',
            image: cardImageUrl,
            thumbnail: cardImageUrl,
            imageUrl: cardImageUrl,
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
 * Fetches full details for a single project
 */
export async function getProjectBySlug(slug: string): Promise<ProjectDetails | null> {
  const configUrl = `${BASE_RAW_URL}/${slug}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/product.config.json`;
  const mdUrl = `${BASE_RAW_URL}/${slug}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/WEBSITE.md`;
  const gistUrl = 'https://gist.githubusercontent.com/Taedj/9bf1dae53f37681b9c13dab8cde8472f/raw/config.json';

  try {
    const [configRes, mdRes, gistRes] = await Promise.all([
      fetch(configUrl, { cache: 'no-store' }),
      fetch(mdUrl, { cache: 'no-store' }),
      fetch(gistUrl, { cache: 'no-store' }).catch(() => null)
    ]);

    if (!configRes.ok || !mdRes.ok) return null;

    const config = await configRes.json();
    const mdContent = await mdRes.text();
    const remotePricingResponse = gistRes && gistRes.ok ? await gistRes.json() : null;

    // Build the full project object
    const heroImage = `${BASE_RAW_URL}/${slug}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/screenshots/cover.mp4`; // Default to cover.mp4
    
    const details: ProjectDetails = {
      config: { ...config, slug },
      hero: {
        title: extractValue(mdContent, '**Title:**', 'Hero Section'),
        subtitle: extractValue(mdContent, '**Subtitle:**', 'Hero Section'),
        ctaPrimaryLabel: extractValue(mdContent, '**CTA Primary Label:**', 'Hero Section') || 'Download Now',
        ctaPrimaryLink: extractValue(mdContent, '**CTA Primary Link:**', 'Hero Section') || '#',
        ctaSecondaryLabel: extractValue(mdContent, '**CTA Secondary Label:**', 'Hero Section') || 'Learn More',
        ctaSecondaryLink: extractValue(mdContent, '**CTA Secondary Link:**', 'Hero Section') || '#',
        image: heroImage
      },
      chapters: parseChapters(mdContent, slug),
      vision: extractValue(mdContent, '**Caption:**', 'Demo & Vision'),
      finalCta: {
        title: extractValue(mdContent, '**Title:**', 'Final CTA'),
        subtitle: extractValue(mdContent, '**Subtitle:**', 'Final CTA'),
        buttonLabel: extractValue(mdContent, '**Button Label:**', 'Final CTA') || 'Get Started',
        buttonLink: extractValue(mdContent, '**Button Link:**', 'Final CTA') || '#'
      },
      styles: {
        heroTitleSize: parseInt(extractValue(mdContent, 'Hero Title Size:', 'UI & Styling')) || 120,
        finalCtaTitleSize: parseInt(extractValue(mdContent, 'Final CTA Title Size:', 'UI & Styling')) || 160,
        buttonPaddingX: parseInt(extractValue(mdContent, 'Button Padding X:', 'UI & Styling')) || 64,
        buttonPaddingY: parseInt(extractValue(mdContent, 'Button Padding Y:', 'UI & Styling')) || 32,
        buttonTextSize: parseInt(extractValue(mdContent, 'Button Text Size:', 'UI & Styling')) || 32,
        sectionSpacing: parseInt(extractValue(mdContent, 'Section Spacing:', 'UI & Styling')) || 160,
        borderRadius: parseInt(extractValue(mdContent, 'Border Radius:', 'UI & Styling')) || 32,
        brandLogo: extractValue(mdContent, 'Brand Logo:', 'UI & Styling'),
        heroBackground: extractValue(mdContent, 'Hero Background:', 'UI & Styling'),
        heroImgWidth: parseInt(extractValue(mdContent, 'Hero Img Width:', 'UI & Styling')) || 100,
        heroImgOffsetY: parseInt(extractValue(mdContent, 'Hero Img Offset Y:', 'UI & Styling')) || 0,
        heroImgScale: parseInt(extractValue(mdContent, 'Hero Img Scale:', 'UI & Styling')) || 100,
        heroVideoWidth: parseInt(extractValue(mdContent, 'Hero Video Width (px):', 'UI & Styling')) || 0,
        heroVideoHeight: parseInt(extractValue(mdContent, 'Hero Video Height (px):', 'UI & Styling')) || 0,
      },
      pricing: parsePricing(mdContent),
      remotePricing: remotePricingResponse?.pricing
    };

    return details;
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    return null;
  }
}

// Helper: Extract value from MD (Flexible for both **Key:** and Key:)
function extractValue(content: string, key: string, sectionName: string): string {
  const lines = content.split('\n');
  let inSection = !sectionName;
  const cleanKey = key.replace(/\*\*/g, '').replace(/:$/, '').trim();

  for (const line of lines) {
    if (sectionName && line.startsWith('## ') && line.includes(sectionName)) inSection = true;
    else if (sectionName && line.startsWith('## ') && inSection) inSection = false;
    
    if (inSection) {
      const cleanLine = line.replace(/\*\*/g, '').trim();
      if (cleanLine.startsWith(cleanKey)) {
        return cleanLine.split(':')[1].trim();
      }
    }
  }
  return '';
}

// Helper: Parse Chapters
function parseChapters(content: string, slug: string): Chapter[] {
  const chapters: Chapter[] = [];
  const lines = content.split('\n');
  let current: Chapter | null = null;
  let inSection = false;

  for (const line of lines) {
    if (line.startsWith('## Feature Chapters')) inSection = true;
    else if (inSection && line.startsWith('## ') && !line.includes('Feature Chapters')) inSection = false;

    if (inSection && line.startsWith('### Chapter')) {
      if (current) chapters.push(current);
      current = {
        title: line.split(': ')[1] || line.replace('### Chapter ', '').trim(),
        description: '',
        image: '',
        styles: { imgWidth: 100, imgOffsetY: 0, imgScale: 100 }
      };
    } else if (inSection && current) {
      if (line.includes('**Description:**')) current.description = line.split('**Description:**')[1].trim();
      else if (line.includes('**Visual Hint:**')) {
        const fileName = line.split('**Visual Hint:**')[1].trim();
        current.image = `${BASE_RAW_URL}/${slug}/${DEFAULT_BRANCH}/CONTROL_WEBSITE/screenshots/${fileName}`;
      }
      else if (line.includes('**Img Width:**')) current.styles.imgWidth = parseInt(line.split('**Img Width:**')[1].trim()) || 100;
      else if (line.includes('**Img Offset Y:**')) current.styles.imgOffsetY = parseInt(line.split('**Img Offset Y:**')[1].trim()) || 0;
      else if (line.includes('**Img Scale:**')) current.styles.imgScale = parseInt(line.split('**Img Scale:**')[1].trim()) || 100;
    }
  }
  if (current) chapters.push(current);
  return chapters;
}

// Helper: Parse Pricing
function parsePricing(content: string): PricingPlan[] {
  const plans: PricingPlan[] = [];
  const lines = content.split('\n');
  let inPricing = false;
  let current: PricingPlan | null = null;
  for (const line of lines) {
    if (line.startsWith('## Pricing')) inPricing = true;
    else if (inPricing && line.startsWith('## ')) inPricing = false;
    if (inPricing && line.startsWith('### Plan: ')) {
      if (current) plans.push(current);
      current = { name: line.replace('### Plan: ', '').trim(), subtitle: '', price: '', features: [] };
    } else if (inPricing && current) {
      if (line.startsWith('**Price:**')) current.price = line.split('**Price:**')[1].trim();
      else if (line.startsWith('**Subtitle:**')) current.subtitle = line.split('**Subtitle:**')[1].trim();
      else if (line.startsWith('- ') || line.startsWith('* ')) current.features.push(line.substring(2).trim());
    }
  }
  if (current) plans.push(current);
  return plans;
}