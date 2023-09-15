import Image from "next/image";
import "./Cover.css";

const Cover = ({ src }) => (
  <div className="cover" aria-hidden="true">
    <Image src={src} fill sizes="100%" className="cover__img" alt="" />
  </div>
);

export default Cover;
