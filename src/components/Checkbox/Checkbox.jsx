import "./Checkbox.css";

const Checkbox = ({
  name,
  labelClassName,
  boxClassName,
  onChange,
  value,
  checked,
  required,
  children,
}) => (
  <label className={["check", labelClassName].filter(Boolean).join(" ")}>
    <input
      name={name}
      onChange={onChange}
      value={value}
      type="checkbox"
      className="check__input"
      checked={checked}
      required={required}
    />
    <span className={["check__box", boxClassName].filter(Boolean).join(" ")} />
    <span className="check__span">{children}</span>
  </label>
);

export default Checkbox;