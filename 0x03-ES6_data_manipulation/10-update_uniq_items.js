const updateUniqueItems = (maps) => {
  if (maps instanceof Map) {
    for (const [key, value] of maps.entries()) {
      if (value === 1) {
        maps.set(key, 100);
      }
    }
    return maps;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
