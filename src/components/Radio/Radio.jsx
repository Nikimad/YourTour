import "./Radio.css";

const Radio = ({ name, onChange, value, checked, children }) => {
  const inputProps = {
    name,
    onChange,
    value,
    type: "radio",
    className: "radio__input visually-hidden",
    checked,
  };

  return (
    <label className="radio">
      <input {...inputProps} />
      <span className="radio__box" />
      <span className="radio__span">{children}</span>
    </label>
  );
};

export default Radio;
