//
//

function SectionItemTitle({ link, title }) {
  return (
    <p>
      <a href={link} target="_blank" rel="noreferrer" className="text-reset">
        {title}
      </a>
    </p>
  );
}

export default SectionItemTitle;
