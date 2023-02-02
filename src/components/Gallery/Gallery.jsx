import "./Gallery.css";
import Section from "../Section";
import travel1 from "../../assets/images/travel-1.jpg";
import travel2 from "../../assets/images/travel-2.jpg";
import travel3 from "../../assets/images/travel-3.jpg";
import travel4 from "../../assets/images/travel-4.jpg";
import travel5 from "../../assets/images/travel-5.jpg";
import travel6 from "../../assets/images/travel-6.jpg";
import travel7 from "../../assets/images/travel-7.jpg";
import travel8 from "../../assets/images/travel-8.jpg";
import travel9 from "../../assets/images/travel-9.jpg";
import travel10 from "../../assets/images/travel-10.jpg";
import travel11 from "../../assets/images/travel-11.jpg";
import travel12 from "../../assets/images/travel-12.jpg";
import travel13 from "../../assets/images/travel-13.jpg";

const Gallery = () => (
  <Section
    id="gallery"
    title="Фотографии путешествий"
    subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
  >
    <div className="gallery">
      <div className="gallery__row">
        <img
          className="gallery__img br_main"
          src={travel1}
          alt="Самолёт над заливом"
        />
        <img
          className="gallery__img gallery__img_hide-tab br_main"
          src={travel2}
          alt="Кэмпинг в пустыне"
        />
        <img
          className="gallery__img gallery__img_hide-mob  br_main"
          src={travel3}
          alt="Горная прогулка"
        />
        <img
          className="gallery__img br_main"
          src={travel4}
          alt="Пустая дорога"
        />
      </div>
      <div className="gallery__row">
        <img
          className="gallery__img br_main"
          src={travel5}
          alt="Скалы у моря"
        />
        <img
          className="gallery__img gallery__img_hide-mob br_main"
          src={travel6}
          alt="Карта"
        />
        <img
          className="gallery__img gallery__img_hide-tab br_main"
          src={travel7}
          alt="Мост в лесу"
        />
        <img className="gallery__img br_main" src={travel8} alt="Кэмпинг" />
        <img
          className="gallery__img br_main"
          src={travel13}
          alt="Узкие улицы"
        />
      </div>
      <div className="gallery__row">
        <img
          className="gallery__img br_main"
          src={travel9}
          alt="Старый город"
        />
        <img
          className="gallery__img br_main"
          src={travel10}
          alt="Озеро в горах"
        />
        <img
          className="gallery__img gallery__img_hide-mob br_main"
          src={travel11}
          alt="Оживлённая улица"
        />
        <img
          className="gallery__img gallery__img_hide-tab br_main"
          src={travel12}
          alt="Сапсёрфинг"
        />
      </div>
    </div>
  </Section>
);

export default Gallery;
