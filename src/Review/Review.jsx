import './Review.css';

const Review = (props) => {
    const {authorName, texts, tour, authorAvatar} = props;

    return (
        <>
          <div className="review__body">
            {texts.map((text) => <p className='fs_big'>{text}</p>)}
          </div>
          <div className="review__footer">
            <h3 className="h3">{authorName}</h3>
            <p className="fs_small color_gray_300">{`Тур: ${tour}`}</p>
            <img className="review__avatar" src={authorAvatar} alt={`${authorName} avatar`}/>
          </div>
        </>
    );
};

export default Review;