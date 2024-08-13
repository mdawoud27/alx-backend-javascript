export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const endpointNums = weakMap.get(endpoint) || 0;
  if (endpointNums >= 4) throw new Error('Endpoint load is high');

  weakMap.set(endpoint, endpointNums + 1);
};
