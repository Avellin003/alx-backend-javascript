export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve();
      } else {
        reject();
      }
    }, 500);
  });
}
