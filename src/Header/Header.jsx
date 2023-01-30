import "./Header.css";
import NavbarContainer from "../Navbar/NavbarContainer";

const Header = () => {
  return (
    <header className="header">
      <NavbarContainer />
      <h1 className="h1">Идеальные путешествия существуют</h1>
      <p>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <a href="#find-tour" className="header__link br_10">
        Найти тур
      </a>
    </header>
  );
};

export default Header;
