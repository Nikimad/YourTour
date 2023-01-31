import './Review.css';
import { uniqueId } from 'lodash';

const Review = (props) => {
    const {authorName, texts, tour, authorAvatar} = props;

    return (
        <article className="review bg_beige_200 br_main">
          <div className="review__body">
            {texts.map((text) => <p key={uniqueId()} className='fs_big'>{text}</p>)}
          </div>
          <div className="review__footer">
            <h3 className="h3">{authorName}</h3>
            <p className="fs_small color_gray_300">{`Тур: ${tour}`}</p>
            <img className="review__avatar" src={authorAvatar} alt={`${authorName} avatar`}/>
          </div>
        </article>
    );
};

export default Review;