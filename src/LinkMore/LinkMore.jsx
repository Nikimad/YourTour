import "./LinkMore.css";
import { ReactComponent as ArrowIcon } from "../assets/svg/arrow.svg";

const LinkMore = (props) => {
  return (
    <a {...props} className="link-more">
      <span className="fs_big">Подробнее</span>
      <ArrowIcon />
    </a>
  );
};

export default LinkMore;