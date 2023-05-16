// Формируем массив ссылок на картинки (для анимации vikingAndFrog)
const linksToTheVikingImage = [];

function importAll(r) {
  r.keys().forEach((key) => linksToTheVikingImage.push(r(key)));
}
importAll(require.context("../viking_animation", true, /\.png$/i));

export default linksToTheVikingImage;
