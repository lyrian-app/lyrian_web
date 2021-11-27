export const generateUniqueKey = () => {
  const charCode = Array(8).fill(0).map(() => Math.floor(Math.random() * 65535));
  return String.fromCharCode(...charCode);
};
