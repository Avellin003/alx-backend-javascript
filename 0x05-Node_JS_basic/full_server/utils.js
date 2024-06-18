const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const fieldMap = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    });

    return fieldMap;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = { readDatabase };
