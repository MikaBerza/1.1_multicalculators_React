// 
// 
import custom  from '../PasswordGenerator.module.css';

function EnteringARange({ password, generatePassword, btnName }) {
  return (
    <>
      <p className={custom['outputPassword']}>{password}</p>
      <button
        type="button"
        className={`btn btn-dark ${custom['btn__generator']}`}
        onClick={generatePassword}
      >
        {btnName}
      </button>
    </>
  );
}

export default EnteringARange;
