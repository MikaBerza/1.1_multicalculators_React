//
//
function Copyright({ link, linkText, copyrightText }) {
  return (
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      {copyrightText}
      <a className="text-reset fw-bold" href={link}>
        {linkText}
      </a>
    </div>
  );
}

export default Copyright;
