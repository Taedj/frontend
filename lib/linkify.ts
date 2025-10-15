const linkify = (text: string | null | undefined) => {
  if (!text) {
    return "";
  }
  // Regex to find Markdown links: [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  // Regex to find raw URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // First, replace Markdown links
  let linkedText = text.replace(markdownLinkRegex, (match, linkText, url) => {
    const href = url.startsWith('http') ? url : `https://${url}`;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color: #20c997;">${linkText}</a>`;
  });

  // Then, replace any remaining raw URLs
  linkedText = linkedText.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #20c997;">${url}</a>`;
  });

  return linkedText;
};

export default linkify;
