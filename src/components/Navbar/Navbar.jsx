import "./Navbar.css";
import Logo from '../../icons/Logo';

const Navbar = ({ isFixed }) => {
  const navbarWrapperClassName = isFixed
    ? "navbar-wrapper navbar-wrapper_fixed navbar-wrapper_colored"
    : "navbar-wrapper";

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
        <a className="link navbar__link" href="tel:+79999999999">
          +7 999 999 99 99
        </a>
      </div>
    </div>
  );
};

export default Navbar;
