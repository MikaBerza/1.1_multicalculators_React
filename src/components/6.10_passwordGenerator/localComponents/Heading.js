// 
// 
import custom from '../PasswordGenerator.module.css';

function Heading({ heading, description }) {
  return (
    <>
      <div className="container-xxl">
        <h2 className="card-title">{heading}</h2>
      </div>
      <div className={custom['card']}>
        <h4 className={`card-title ${custom['h4__item']}`}>{description}</h4>
      </div>
    </>
  );
}

export default Heading;
