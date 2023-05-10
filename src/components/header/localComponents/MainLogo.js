//
//
function MainLogo({ logo, link }) {
  return (
    <a className="navbar-brand " href={link}>
      <img src={logo} height="60" alt="logo" />
    </a>
  );
}

export default MainLogo;
