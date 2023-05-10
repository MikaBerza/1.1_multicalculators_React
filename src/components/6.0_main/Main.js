import "./Main.module.css";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css"';
import FactsAboutCats from "../6.6_factsAboutCats/FactsAboutCats";
import PasswordGenerator from "../6.10_passwordGenerator/PasswordGenerator";
import InformationIp from "../6.12_informationIp/InformationIp";

function Main() {
  return (
    <>
      <hr />
      <FactsAboutCats />
      <hr />
      <PasswordGenerator />
      <hr />
      <InformationIp />
      <hr />
    </>
  );
}

export default Main;
