const Textarea = ({
  label,
  labelClassName,
  name,
  textareaClassName,
  onChange,
  value,
}) => {
  const textareaProps = {
    name,
    className: ["input", textareaClassName].filter(Boolean).join(" "),
    onChange,
    value,
  };

  return (
    <label className={["label", labelClassName].filter(Boolean).join(" ")}>
      {label}
      <textarea {...textareaProps} />
    </label>
  );
};

export default Textarea;
