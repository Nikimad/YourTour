import "./Reviews.css";
import Section from "../Section";
import Review from "../Review";
import mariaAvatar from "../../assets/images/review-1.jpg";
import pavelAvatar from "../../assets/images/review-2.jpg";

const reviews = [
  {
    authorName: "Мария",
    texts: [
      "Ехала в тур одна и боялась, что будет неловко. В итоге в группе за три дня все подружились, а гид подстраивал темп под самых медленных, и никто не чувствовал себя обузой.",
    ],
    tour: "Вдали от дома",
    authorAvatar: mariaAvatar,
  },
  {
    authorName: "Павел",
    texts: [
      "Ходил в горы и раньше, но с организаторами впервые. Маршрут продуман до мелочей: акклиматизация, запасные варианты на случай погоды, горячий обед на привале.",
      "Отдельное спасибо за снаряжение: взял в аренду всё, что не хотел покупать ради одной поездки. Обязательно вернусь осенью.",
    ],
    tour: "Путешествие в горы",
    authorAvatar: pavelAvatar,
  },
];

const Reviews = () => (
  <Section
    id="reviews"
    title="Отзывы наших путешественников"
    subtitle="Что говорят те, кто уже побывал в наших турах"
    className="container"
  >
    <div className="reviews">
      {reviews.map((review) => (
        <Review key={review.authorName} {...review} />
      ))}
    </div>
  </Section>
);

export default Reviews;
