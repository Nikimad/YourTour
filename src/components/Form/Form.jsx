import "./Form.css";
import cn from "classnames";
import Input from "../Input";
import Textarea from "../Textarea";
import Select from "../Select";
import Checkbox from "../Checkbox";
import Radio from "../Radio";

const Form = ({
  onChange,
  onSubmit,
  onReset,
  name,
  destination,
  email,
  tel,
  dateFrom,
  dateTo,
  comment,
  ageAgreement,
  rulesAgreement,
}) => (
  <form className="form" onSubmit={onSubmit} onReset={onReset}>
    <Input
      name="name"
      type="text"
      label="Имя"
      placeholder="Введите Ваше имя"
      onChange={onChange}
      value={name}
    />
    <Select
      name="destination"
      label="Направление"
      colorClass="color_gray_300"
      defaultOption="Куда хотите ехать"
      options={["Китай", "Турция", "Бразилия", "Бельгия", "Грузия"]}
      onChange={onChange}
      value={destination}
    />
    <Input
      name="email"
      type="email"
      label="Email"
      placeholder="example@mail.com"
      onChange={onChange}
      value={email}
    />
    <Input
      name="tel"
      type="tel"
      label="Телефон"
      placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
      onChange={onChange}
      value={tel}
    />
    <Input
      name="dateFrom"
      type="date"
      label="Дата от"
      onChange={onChange}
      value={dateFrom}
    />
    <Input
      name="dateTo"
      type="date"
      label="Дата от"
      onChange={onChange}
      value={dateTo}
    />
    <Textarea
      name="comment"
      label="Комментарий"
      labelClassName={cn("form__field_fullwidth")}
      textareaClassName={cn("form__textarea")}
      onChange={onChange}
      value={comment}
    />
    <fieldset className={cn("form__fieldset", "form__field_fullwidth")}>
      <legend className="form__fieldset__legend">Вам есть 18 лет?</legend>
      <Radio
        name="ageAgreement"
        onChange={onChange}
        value="yes"
        checked={ageAgreement === "yes"}
      >
        Да
      </Radio>
      <Radio
        name="ageAgreement"
        onChange={onChange}
        value="no"
        checked={ageAgreement === "no"}
      >
        Нет
      </Radio>
    </fieldset>
    <Checkbox
      name="rulesAgreement"
      labelClassName={cn("form__field_fullwidth")}
      onChange={onChange}
      value={rulesAgreement === "yes" ? "no" : "yes"}
      checked={rulesAgreement === "yes"}
    >
      <span className="form__span color_gray_300">
        Нажимая кнопку, я принимаю условия{" "}
      </span>
      <a href="/rules" className="link color_black">
        Лицензионного Договора
      </a>
    </Checkbox>
    <fieldset
      className={cn(
        "form__fieldset",
        "form__controls",
        "form__field_fullwidth"
      )}
    >
      <legend className="visually-hidden">Элементы котроля формы</legend>
      <Input
        name="submit"
        type="submit"
        value="Найти тур"
        className={cn("form__button", "form__button-submit")}
      />
      <Input
        name="reset"
        type="reset"
        value="Сбросить"
        className={cn("form__button", "form__button-reset")}
      />
    </fieldset>
  </form>
);

export default Form;
