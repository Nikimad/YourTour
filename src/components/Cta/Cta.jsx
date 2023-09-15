import ctaImg from "@assets/images/cta.jpg";
import Section from "../Section";
import Image from "next/image";
import "./Cta.css";

const Cta = () => (
  <Section id="cta">
    <div className="cta">
      <div className="cta__img-wrapper">
        <Image
          src={ctaImg}
          alt="Долина с домом у озера"
          fill
          sizes="100%"
         />
      </div>
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

export default Cta;
