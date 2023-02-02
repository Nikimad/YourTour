import "./Cover.css";

const Cover = ({ src }) => (
  <div className="cover" aria-hidden="true">
    <img src={src} className="cover__img" alt="" />
  </div>
);

export default Cover;
