import "./Select.css";
import cn from "classnames";
import { uniqueId } from "lodash";

const Select = (props) => {
  const {
    label,
    defaultOption,
    options,
    value,
    name,
    className,
    colorClass,
    onChange,
  } = props;

  const selectProps = {
    label,
    value,
    name,
    onChange,
    className: cn("input", "select", className, { [colorClass]: value === "" }),
  };

  return (
    <label className={"label"}>
      {label}
      <select {...selectProps}>
        <option value={defaultOption} hidden>
          {defaultOption}
        </option>
        {options.map((item) => (
          <option className="color_black" key={uniqueId()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
