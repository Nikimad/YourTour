import "./Header.css";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="container header__container">
        <h1 className="h1">Идеальные путешествия существуют</h1>
        <p>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <a href="#gallery" className="header__link fs_small br_10">
          Найти тур
        </a>
      </div>
    </header>
  );
};

export default Header;
