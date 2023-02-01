import "./LinkMore.css";
import cn from "classnames";
import { ReactComponent as ArrowIcon } from "../assets/svg/arrow.svg";

const LinkMore = (props) => {
  const { className } = props;

  return (
    <a {...props} className={cn("link-more", className)}>
      <span className="fs_big">Подробнее</span>
      <ArrowIcon />
    </a>
  );
};

export default LinkMore;
