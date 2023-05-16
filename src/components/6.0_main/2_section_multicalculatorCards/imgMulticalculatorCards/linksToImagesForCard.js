// Формируем массив ссылок на картинки (для MulticalculatorCards)
const linksToTheCardImage = [];

function importAll(r) {
  r.keys().forEach((key) => linksToTheCardImage.push(r(key)));
}
importAll(require.context("../imgMulticalculatorCards", true, /\.png|jpg$/i));

export default linksToTheCardImage;
