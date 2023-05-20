import "../Authentication.css";

function Heading({ logo, heading, requirement }) {
  return (
    <div className="authentication__logo">
      <img src={logo} height="50" alt="logo" />
      <h4 className="authentication__logo-heading">{heading}</h4>
      <h5 className="authentication__logo-requirement">{requirement}</h5>
    </div>
  );
}

export default Heading;
