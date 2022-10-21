export default function (automobiles) {
  let list = new Set();
  if (automobiles.length !== 0) {
    automobiles.forEach(({ modification }) => {
      list.add(modification);
    });
  }
  return [...list.values()];
}
