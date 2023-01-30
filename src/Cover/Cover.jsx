import './Cover.scss';

const Cover = ({src}) => {
    return (
        <div className='cover' aria-hidden="true">
            <img src={src} className="cover__img" alt=''/>
        </div>
    );
};

export default Cover;