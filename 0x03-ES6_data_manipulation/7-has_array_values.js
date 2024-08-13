const hasValuesFromArray = (set, array) => {
  let cnt = 0;
  for (const item of array) {
    if (set.has(item)) cnt += 1;
  }
  return cnt === array.length;
};

export default hasValuesFromArray;
