import cn from "classnames";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Navbar = ({ isFixed }) => {
  const navbarWrapperClassName = cn("navbar-wrapper", {
    "navbar-wrapper_fixed": isFixed,
    "navbar-wrapper_colored": isFixed,
  });

  return (
    <div className={navbarWrapperClassName}>
      <div className="navbar container">
        <Logo className="navbar__logo" />
        <nav className="navbar__nav">
          <a href="#tours" className="link">
            Туры
          </a>
          <a href="#create-tour" className="link">
            Создать тур
          </a>
          <a href="#reviews" className="link">
            Отзывы
          </a>
          <a href="#stories" className="link">
            Истории
          </a>
        </nav>
        <a className="link navbar__link" href="tel: +79999999999">
          +7 999 999 99 99
        </a>
      </div>
    </div>
  );
};

export default Navbar;
