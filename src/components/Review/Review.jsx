import Image from "next/image";
import { uniqueId } from "lodash";
import "./Review.css";

const Review = ({ authorName, texts, tour, authorAvatar }) => (
  <article className="review bg_beige_200 br_main">
    <div className="review__body">
      {texts.map((text) => (
        <p key={uniqueId()} className="fs_big">
          {text}
        </p>
      ))}
    </div>
    <div className="review__footer">
      <h3 className="h3">{authorName}</h3>
      <p className="fs_small color_gray_300">{`Тур: ${tour}`}</p>
      <div className="review__avatar-wrapper">
      <Image
        className="review__avatar"
        src={authorAvatar}
        alt={`${authorName} аватар`}
        fill
        sizes="100%"
      />
      </div>
    </div>
  </article>
);

export default Review;
