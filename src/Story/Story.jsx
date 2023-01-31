import "./Story.css";
import Cover from "../Cover/Cover";
import LinkMore from "../LinkMore/LinkMore";

const Story = (props) => {
  const { title, linkHref, coverImg, socials, children } = props;

  return (
    <article className="story cover-container link-more-container br_main">
      <div className="story__header">
        <h3 className="h3">{title}</h3>
        {children}
      </div>
      <div className="story__footer">
        <LinkMore href={linkHref} className="story__link"/>
        <ul className="story___socials">
          {socials.map((social) => (
            <a className="link" href={`/${social}`}>
              {social}
            </a>
          ))}
        </ul>
      </div>
      <Cover src={coverImg} />
    </article>
  );
};

export default Story;