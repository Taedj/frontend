const linkify = (text: string) => {
  // Regex to find Markdown links: [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
  // Regex to find raw URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // First, replace Markdown links
  let linkedText = text.replace(markdownLinkRegex, (match, linkText, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #20c997;">${linkText}</a>`;
  });

  // Then, replace any remaining raw URLs
  linkedText = linkedText.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #20c997;">${url}</a>`;
  });

  return linkedText;
};

export default linkify;
