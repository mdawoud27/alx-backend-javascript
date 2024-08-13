const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') return '';
  const result = [];
  set.forEach((item) => {
    if (typeof startString !== 'string' && item.startsWith(startString)) result.push(item.slice(startString.length));
  });
  return result.join('-');
};

export default cleanSet;
