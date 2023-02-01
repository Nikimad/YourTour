import "./ToursHeader.css";
import cn from "classnames";

const ToursHeader = ({ setActive, active }) => {
  const getCn = (name) =>
    cn("tours__nav__item", {
      tours__nav__item_active: name === active,
    });

  const onClick = (e, name) => {
    e.preventDefault();

    setActive(name);
  };

  return (
    <div className="section__header">
      <h2 className="h2">Выбери свой тур</h2>
      <ul className="tours__nav">
        <li className={getCn("popular")}>
          <a
            className="link tour__nav__link fs_big"
            href="/popular"
            onClick={(e) => onClick(e, "popular")}
          >
            Популярные
          </a>
        </li>
        <li className={getCn("author")}>
          <a
            className="link tour__nav__link fs_big"
            href="/author"
            onClick={(e) => onClick(e, "author")}
          >
            Авторские
          </a>
        </li>
        <li className={getCn("hikes")}>
          <a
            className="link tour__nav__link fs_big"
            href="/hikes"
            onClick={(e) => onClick(e, "hikes")}
          >
            Походы
          </a>
        </li>
        <li className={getCn("rafting")}>
          <a
            className="link tour__nav__link fs_big"
            href="/rafting"
            onClick={(e) => onClick(e, "rafting")}
          >
            Сплавы
          </a>
        </li>
        <li className={getCn("biking")}>
          <a
            className="link tour__link fs_big"
            href="/biking"
            onClick={(e) => onClick(e, "biking")}
          >
            Велопрогулки
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ToursHeader;
