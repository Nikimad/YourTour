import "./Cover.css";

const Cover = ({ src }) => (
  <div className="cover" aria-hidden="true">
    <img src={src} className="cover__img" alt="" loading="lazy" decoding="async" />
  </div>
);

export default Cover;
