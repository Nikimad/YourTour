import "./ToursHeader.css";

const ToursHeader = ({ categories, active, onChange }) => (
  <div className="section__header">
    <h2 className="h2">Выбери свой тур</h2>
    <ul className="tours__nav">
      {categories.map(({ id, label }) => (
        <li
          key={id}
          className={
            id === active
              ? "tours__nav__item tours__nav__item_active"
              : "tours__nav__item"
          }
        >
          <button
            type="button"
            className="link tour__nav__link fs_big"
            aria-pressed={id === active}
            onClick={() => onChange(id)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ToursHeader;