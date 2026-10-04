import "./Story.css";
import Cover from "../Cover";
import LinkMore from "../LinkMore";
import Logo from "../../icons/Logo";

const Story = ({ title, linkHref, coverImg, children }) => (
  <article className="story cover-container link-more-container br_main">
    <div className="story__header">
      <h3 className="h3 story__title">{title}</h3>
      {children}
    </div>
    <div className="story__footer">
      <LinkMore href={linkHref} className="story__link" />
      <Logo className="story__logo" />
    </div>
    <Cover src={coverImg} />
  </article>
);

export default Story;
