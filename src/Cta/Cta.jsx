import "./Cta.css";
import ctaImg from "../assets/images/cta.jpg";

const Cta = () => {
  return (
    <div className="cta">
      <img src={ctaImg} className="cta__img" alt="A house in the valley with lake"/>
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
  );
};

export default Cta;
