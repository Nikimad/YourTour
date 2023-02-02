import "./Cta.css";
import Section from "../Section";
import ctaImg from "../../assets/images/cta.jpg";

const Cta = () => {
  return (
    <Section id="cta">
      <div className="cta">
        <img src={ctaImg} className="cta__img" alt="Долина с домом у озера" />
        <div className="cta__body">
          <h3 className="h3 cta__heading">
            Пора в путешествие
            <br />
            вместе с нами!
          </h3>
          <p>
            <span className="color_gray_300">
              Напиши на почту и узнай подробности
              <br />
              на{" "}
            </span>
            <a className="link color_black" href="mailto: yourtour@gmail.com">
              yourtour@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Cta;
