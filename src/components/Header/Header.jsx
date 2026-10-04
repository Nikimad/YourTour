import "./Header.css";
import Navbar from "../Navbar";

const Header = () => (
  <header className="header">
    <Navbar />
    <div className="container header__container">
      <h1 className="h1">Идеальные путешествия существуют</h1>
      <p>
        Готовые маршруты и авторские туры: походы, сплавы и велопрогулки.
        Выбирайте направление или соберите поездку под себя.
      </p>
      <a href="#tours" className="header__link fs_small br_10">
        Найти тур
      </a>
    </div>
  </header>
);

export default Header;
