import "./LinkMore.css";

const LinkMore = (props) => (
  <a
    {...props}
    className={["link-more", props.className].filter(Boolean).join(" ")}
  >
    <span className="fs_big">Подробнее</span>
    <span className="link-more__icon" aria-hidden='true'></span>
  </a>
);

export default LinkMore;
