import "./Checkbox.css";
import cn from "classnames";

const Checkbox = (props) => {
  const {
    name,
    labelClassName,
    boxClassName,
    onChange,
    value,
    checked,
    children,
  } = props;

  const inputProps = {
    name,
    onChange,
    value,
    type: "checkbox",
    className: cn("check__input", "visually-hidden"),
    checked,
  };

  return (
    <label className={cn("check", labelClassName)}>
      <input {...inputProps} />
      <span className={cn("check__box", boxClassName)} />
      <span className="check__span">{children}</span>
    </label>
  );
};

export default Checkbox;
