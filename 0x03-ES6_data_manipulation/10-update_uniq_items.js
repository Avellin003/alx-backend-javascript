export default function updateUniqueItems(maps) {
  /* eslint-disable no-param-reassign */
  if (mapss instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        maps.set(key, 100);
      }
    }

    return maps;
  }

  throw new Error('Cannot process');
}
