import "./Reviews.css";
import Section from "../Section/Section";
import Review from "../Review/Review";
import mariaAvatar from "../../assets/images/review-1.jpg";
import pavelAvatar from "../../assets/images/review-2.jpg";
import { uniqueId } from "lodash";

const reviews = [
  {
    authorName: "Мария",
    texts: [
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.",
    ],
    tour: "Вдали от дома",
    authorAvatar: mariaAvatar,
  },
  {
    authorName: "Павел",
    texts: [
      "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям",
      "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.",
    ],
    tour: "Путешествие в горы ",
    authorAvatar: pavelAvatar,
  },
];

const Reviews = () => {
  return (
    <Section
      id="reviews"
      title="Отзывы наших путешественников"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
      className="container"
    >
      <ul className="reviews">
        {reviews.map((review) => (
          <li key={uniqueId()}>
            <Review {...review} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Reviews;
