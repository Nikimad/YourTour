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

const rows = [
  [
    { src: travel1, alt: "Самолёт над заливом" },
    { src: travel2, alt: "Кемпинг в пустыне", hide: "tab" },
    { src: travel3, alt: "Горная прогулка", hide: "mob" },
    { src: travel4, alt: "Пустая дорога" },
  ],
  [
    { src: travel5, alt: "Скалы у моря" },
    { src: travel6, alt: "Карта", hide: "mob" },
    { src: travel7, alt: "Мост в лесу", hide: "tab" },
    { src: travel8, alt: "Кемпинг" },
    { src: travel13, alt: "Узкие улицы" },
  ],
  [
    { src: travel9, alt: "Старый город" },
    { src: travel10, alt: "Озеро в горах" },
    { src: travel11, alt: "Оживлённая улица", hide: "mob" },
    { src: travel12, alt: "SUP-серфинг", hide: "tab" },
  ],
];

const Gallery = () => (
  <Section
    id="gallery"
    title="Фотографии путешествий"
    subtitle="Моменты из наших поездок: от горных озёр до узких улочек старых городов"
    className="gallery-section"
  >
    <div className="gallery">
      {rows.map((row, i) => (
        <div className="gallery__row" key={i}>
          {row.map(({ src, alt, hide }) => (
            <img
              key={src}
              className={`gallery__img br_main${hide ? ` gallery__img_hide-${hide}` : ""}`}
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      ))}
    </div>
  </Section>
);

export default Gallery;