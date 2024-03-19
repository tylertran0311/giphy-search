export const timeTrim = (str) => {
  if (str) {
    return str.split(" ")[0];
  }
  return str;
};
