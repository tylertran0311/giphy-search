// Copy text to clipboard and show alert
export const copyLinkClipBoard = (url) => {
  navigator.clipboard.writeText(url);
  alert("Link copied to clipboard!");
};
