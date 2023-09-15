import "./LinkMore.css";
import cn from "classnames";
import { default as ArrowIcon } from "@assets/svg/arrow.svg";

const LinkMore = (props) => (
  <a {...props} className={cn("link-more", props.className)}>
    <span className="fs_big">Подробнее</span>
    <ArrowIcon />
  </a>
);

export default LinkMore;
