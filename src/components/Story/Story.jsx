import "./Story.css";
import Cover from "../Cover/Cover";
import LinkMore from "../LinkMore/LinkMore";
import { uniqueId } from "lodash";

const Story = ({ title, linkHref, coverImg, socials, children }) => (
  <article className="story cover-container link-more-container br_main">
    <div className="story__header">
      <h3 className="h3 story__title">{title}</h3>
      {children}
    </div>
    <div className="story__footer">
      <LinkMore href={linkHref} className="story__link" />
      <ul className="story___socials">
        {socials.map((social) => (
          <a key={uniqueId()} className="link" href={`/${social}`}>
            {social}
          </a>
        ))}
      </ul>
    </div>
    <Cover src={coverImg} />
  </article>
);

export default Story;
