import "./Input.css";
import cn from "classnames";

const Input = ({
  label,
  name,
  type,
  placeholder,
  className,
  onChange,
  value,
}) => {
  const inputProps = {
    name,
    type,
    placeholder,
    className: cn("input", className),
    onChange,
    value,
  };

  return (
    <label className="label">
      {label}
      <input {...inputProps} />
    </label>
  );
};

export default Input;
