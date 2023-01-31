import "./Tour.css";
import Cover from "../Cover/Cover";
import LinkMore from "../LinkMore/LinkMore";

const Tour = (props) => {
  const { title, price, linkHref, coverImg } = props;

  return (
    <article className="tour link-more-container cover-container br_main">
      <h3 className="h3">{title}</h3>
      <p className="fs_small">{price}</p>
      <LinkMore href={linkHref} className="tour__link" />
      <Cover src={coverImg} />
    </article>
  );
};

Tour.defaultProps = {
  title: "Путешествие в горы",
  price: "от 80 000 руб",
};

export default Tour;
