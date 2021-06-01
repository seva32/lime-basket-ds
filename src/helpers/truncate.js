const truncate = (str, max) => {
  const len = str.length;
  if (len < max) return str;

  return `${str.substring(0, max)}...`;
};

export default truncate;
