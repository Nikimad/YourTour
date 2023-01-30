import "./Input.css";
import cn from "classnames";

const Input = (props) => {
  const { label, name, type, placeholder, className, onChange, value } = props;

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
