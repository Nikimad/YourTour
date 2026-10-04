import "./Select.css";

const Select = ({
  label,
  defaultOption,
  options,
  value,
  name,
  className,
  colorClass,
  onChange,
  required,
}) => {
  const selectProps = {
    value,
    name,
    onChange,
    required,
    className: ["input", "select", className, value === "" && colorClass]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <label className="label">
      {label}
      <select {...selectProps}>
        <option value="" hidden>
          {defaultOption}
        </option>
        {options.map((item) => (
          <option className="color_black" key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
