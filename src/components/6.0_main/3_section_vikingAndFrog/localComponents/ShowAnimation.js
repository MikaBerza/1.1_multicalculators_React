//
//

function ShowAnimation({ linksToTheVikingImage, count }) {
  return (
    <img
      className="container-xxl"
      src={linksToTheVikingImage[count]}
      alt="Viking"
    />
  );
}

export default ShowAnimation;
