const cleanSet = (set, startString) => {
  if (!startString) return '';
  const result = [];
  set.forEach((item) => {
    if (item.startsWith(startString)) result.push(item.slice(startString.length));
  });
  return result.join('-');
};

export default cleanSet;
