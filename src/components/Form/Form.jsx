import "./Form.css";
import Input from "../Input";
import Textarea from "../Textarea";
import Select from "../Select";
import Checkbox from "../Checkbox";
import Radio from "../Radio";

const today = new Date().toISOString().slice(0, 10);

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
  status,
}) => (
  <form className="form" onSubmit={onSubmit} onReset={onReset}>
    <Input
      name="name"
      type="text"
      label="Имя"
      placeholder="Введите Ваше имя"
      autoComplete="name"
      required
      onChange={onChange}
      value={name}
    />
    <Select
      name="destination"
      label="Направление"
      colorClass="color_gray_300"
      defaultOption="Куда хотите ехать"
      options={["Китай", "Турция", "Бразилия", "Бельгия", "Грузия"]}
      required
      onChange={onChange}
      value={destination}
    />
    <Input
      name="email"
      type="email"
      label="Email"
      placeholder="example@mail.com"
      autoComplete="email"
      required
      onChange={onChange}
      value={email}
    />
    <Input
      name="tel"
      type="tel"
      label="Телефон"
      placeholder="+7 (900) 000-00-00"
      autoComplete="tel"
      inputMode="tel"
      required
      onChange={onChange}
      value={tel}
    />
    <Input
      name="dateFrom"
      type="date"
      label="Дата от"
      min={today}
      required
      onChange={onChange}
      value={dateFrom}
    />
    <Input
      name="dateTo"
      type="date"
      label="Дата до"
      min={dateFrom || today}
      required
      onChange={onChange}
      value={dateTo}
    />
    <Textarea
      name="comment"
      label="Комментарий"
      labelClassName="form__field_fullwidth"
      textareaClassName="form__textarea"
      onChange={onChange}
      value={comment}
    />
    <fieldset className="form__fieldset form__field_fullwidth">
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
      labelClassName="form__field_fullwidth"
      onChange={onChange}
      value="yes"
      checked={rulesAgreement === "yes"}
      required
    >
      <span className="form__span color_gray_300">
        Нажимая кнопку, я принимаю условия{" "}
      </span>
      <a href="/rules" className="link color_black">
        Лицензионного Договора
      </a>
    </Checkbox>
    <fieldset className="form__fieldset form__controls form__field_fullwidth">
      <legend className="visually-hidden">Управление формой</legend>
      <button type="submit" className="input form__button form__button-submit">
        Найти тур
      </button>
      <button type="reset" className="input form__button form__button-reset">
        Сбросить
      </button>
    </fieldset>
    <p
      className="form__status form__field_fullwidth"
      role="status"
      aria-live="polite"
    >
      {status === "success" &&
        "Спасибо! Заявка принята, мы свяжемся с вами по указанным контактам."}
    </p>
  </form>
);

export default Form;