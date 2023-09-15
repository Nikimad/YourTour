import "./Tour.css";
import Cover from "../Cover";
import LinkMore from "../LinkMore";

const Tour = ({ linkHref, coverImg }) => (
  <article className="tour link-more-container cover-container br_main">
    <h3 className="h3 tour__title">Путешествие в горы</h3>
    <p className="fs_small">от 80 000 руб</p>
    <LinkMore href={linkHref} className="tour__link" />
    <Cover src={coverImg} />
  </article>
);

export default Tour;
