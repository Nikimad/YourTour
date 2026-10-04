import "./Input.css";

const Input = ({ label, className, ...props }) => (
  <label className="label">
    {label}
    <input
      {...props}
      className={["input", className].filter(Boolean).join(" ")}
    />
  </label>
);

export default Input;