import custom from "../Footer.module.css";
//
//

function Icon({ link, pathLogo }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="me-4 text-reset">
      <img className={custom["footerIcon"]} src={pathLogo} alt="icon" />
    </a>
  );
}

export default Icon;
