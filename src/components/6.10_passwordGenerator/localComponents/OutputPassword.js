// 
// 
import custom from '../PasswordGenerator.module.css';

function OutputPassword({
  minRange,
  maxRange,
  stepRange,
  value,
  handleRange,
  text,
}) {
  return (
    <div>
      <input
        type="range"
        min={minRange}
        max={maxRange}
        step={stepRange}
        value={value}
        onChange={handleRange}
      />
      <div>
        <label htmlFor="customRange1" className={custom['form-label']}>
          {text}
        </label>
        <label htmlFor="customRange1" className={custom['form-label']}>
          {value}
        </label>
      </div>
    </div>
  );
}

export default OutputPassword;
