import travel1 from "@assets/images/travel-1.jpg";
import travel2 from "@assets/images/travel-2.jpg";
import travel3 from "@assets/images/travel-3.jpg";
import travel4 from "@assets/images/travel-4.jpg";
import travel5 from "@assets/images/travel-5.jpg";
import travel6 from "@assets/images/travel-6.jpg";
import travel7 from "@assets/images/travel-7.jpg";
import travel8 from "@assets/images/travel-8.jpg";
import travel9 from "@assets/images/travel-9.jpg";
import travel10 from "@assets/images/travel-10.jpg";
import travel11 from "@assets/images/travel-11.jpg";
import travel12 from "@assets/images/travel-12.jpg";
import travel13 from "@assets/images/travel-13.jpg";
import Image from "next/image";
import Section from "../Section";
import "./Gallery.css";

const Gallery = () => (
  <Section
    id="gallery"
    title="Фотографии путешествий"
    subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    className="gallery-section"
  >
    <div className="gallery">
      <div className="gallery__row">
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel1}
            alt="Самолёт над заливом"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img gallery__img_hide-tab br_main"
            src={travel2}
            alt="Кэмпинг в пустыне"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img gallery__img_hide-mob  br_main"
            src={travel3}
            alt="Горная прогулка"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel4}
            alt="Пустая дорога"
            fill
            sizes="100%"
          />
        </div>
      </div>
      <div className="gallery__row">
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel5}
            alt="Скалы у моря"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img gallery__img_hide-mob br_main"
            src={travel6}
            alt="Карта"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img gallery__img_hide-tab br_main"
            src={travel7}
            alt="Мост в лесу"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel8}
            alt="Кэмпинг"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel13}
            alt="Узкие улицы"
            fill
            sizes="100%"
          />
        </div>
      </div>
      <div className="gallery__row">
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel9}
            alt="Старый город"
            priority
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img br_main"
            src={travel10}
            alt="Озеро в горах"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img gallery__img_hide-mob br_main"
            src={travel11}
            alt="Оживлённая улица"
            fill
            sizes="100%"
          />
        </div>
        <div className="gallery__img-wrapper">
          <Image
            className="gallery__img gallery__img_hide-tab br_main"
            src={travel12}
            alt="Сапсёрфинг"
            fill
            sizes="100%"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default Gallery;
