import Section from "../Section/Section";
import "./Tours.css";
import tour1 from "../assets/images/card-1.jpg";
import tour2 from "../assets/images/card-2.jpg";
import tour3 from "../assets/images/card-3.jpg";
import tour4 from "../assets/images/card-4.jpg";
import tour5 from "../assets/images/card-5.jpg";
import tour6 from "../assets/images/card-6.jpg";
import Tour from "../Tour/Tour";

const tours = [
  {
    name: "tour1",
    cover: tour1,
  },
  {
    name: "tour2",
    cover: tour2,
  },
  {
    name: "tour3",
    cover: tour3,
  },
  {
    name: "tour4",
    cover: tour4,
  },
  {
    name: "tour5",
    cover: tour5,
  },
  {
    name: "tour6",
    cover: tour6,
  },
];

const Tours = () => {
  return (
    <Section>
      <ul className="tours">
        {tours.map((tour) => (
          <li>
            <Tour
              key={tour.name}
              linkHref={`/${tour.name}`}
              coverImg={tour.cover}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Tours;
