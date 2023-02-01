import './Section.css';

const Section = (props) => {
  const { title, subtitle, id, children } = props;
  const isHeaderCustom = typeof title === "string";

  return (
    <section className="section" id={id}>
      {isHeaderCustom && (
        <div className="section__header">
          <h2 className="h2">{title}</h2>
          <p className="color_gray_300">{subtitle}</p>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
