import cn from "classnames";

const Textarea = (props) => {
  const { label, labelClassName, name, textareaClassName, onChange, value } =
    props;

  const textareaProps = {
    name,
    className: cn("input", textareaClassName),
    onChange,
    value,
  };

  return (
    <label className={cn("label", labelClassName)}>
      {label}
      <textarea {...textareaProps} />
    </label>
  );
};

export default Textarea;
