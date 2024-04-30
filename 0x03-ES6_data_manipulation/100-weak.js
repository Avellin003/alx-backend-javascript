export const weakMap = new WeakMap();

export function queryAPI(end) {
  let called = 0;
  if (weakMap.get(end)) called = weakMap.get(end);
  weakMap.set(end, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
}
