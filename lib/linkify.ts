const linkify = (text: string) => {
  const urlRegex = /(https?:\[^\\s]+)/g;
  return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #20c997;">${url}</a>`);
};

export default linkify;
