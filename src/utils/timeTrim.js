// Format date to "DD-MM-YYYY"
export const timeTrim = (str) => {
  if (str) {
    return str.split(" ")[0].split("-").reverse().join("-");
  }
  return str;
};
