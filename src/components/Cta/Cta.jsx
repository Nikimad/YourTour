import "./Cta.css";
import Section from "../Section";
import ctaImg from "../../assets/images/cta.jpg";

const Cta = () => (
  <Section id="cta">
    <div className="cta">
      <img src={ctaImg} className="cta__img" alt="Долина с домом у озера" />
      <div className="cta__body">
        <h2 className="h3 cta__heading">
          Пора в путешествие
          <br />
          вместе с нами!
        </h2>
        <p>
          <span className="color_gray_300">
            Напиши на почту и узнай подробности
            <br />
            на{" "}
          </span>
          <a className="link color_black" href="mailto:yourtour@example.com">
            yourtour@example.com
          </a>
        </p>
      </div>
    </div>
  </Section>
);

export default Cta;
