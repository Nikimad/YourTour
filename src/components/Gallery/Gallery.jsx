import "./Gallery.css";
import Section from "../Section";

const Gallery = () => (
  <Section
    id="gallery"
    title="Фотографии путешествий"
    subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    className='gallery-section'
  >
    <div className="gallery">
      <div className="gallery__row">
        <img
          className="gallery__img br_main"
          src="/assets/images/travel-1.jpg"
          alt="Самолёт над заливом"
        />
        <img
          className="gallery__img gallery__img_hide-tab br_main"
          src="/assets/images/travel-2.jpg"
          alt="Кэмпинг в пустыне"
        />
        <img
          className="gallery__img gallery__img_hide-mob  br_main"
          src="/assets/images/travel-3.jpg"
          alt="Горная прогулка"
        />
        <img
          className="gallery__img br_main"
          src="/assets/images/travel-4.jpg"
          alt="Пустая дорога"
        />
      </div>
      <div className="gallery__row">
        <img
          className="gallery__img br_main"
          src="/assets/images/travel-5.jpg"
          alt="Скалы у моря"
        />
        <img
          className="gallery__img gallery__img_hide-mob br_main"
          src="/assets/images/travel-6.jpg"
          alt="Карта"
        />
        <img
          className="gallery__img gallery__img_hide-tab br_main"
          src="/assets/images/travel-7.jpg"
          alt="Мост в лесу"
        />
        <img className="gallery__img br_main" src="/assets/images/travel-8.jpg" alt="Кэмпинг" />
        <img
          className="gallery__img br_main"
          src="/assets/images/travel-13.jpg"
          alt="Узкие улицы"
        />
      </div>
      <div className="gallery__row">
        <img
          className="gallery__img br_main"
          src="/assets/images/travel-9.jpg"
          alt="Старый город"
        />
        <img
          className="gallery__img br_main"
          src="/assets/images/travel-10.jpg"
          alt="Озеро в горах"
        />
        <img
          className="gallery__img gallery__img_hide-mob br_main"
          src="/assets/images/travel-11.jpg"
          alt="Оживлённая улица"
        />
        <img
          className="gallery__img gallery__img_hide-tab br_main"
          src="/assets/images/travel-12.jpg"
          alt="Сапсёрфинг"
        />
      </div>
    </div>
  </Section>
);

export default Gallery;
