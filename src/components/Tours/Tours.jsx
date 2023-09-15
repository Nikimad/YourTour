import "./Tours.css";
import Section from "../Section";
import Tour from "../Tour";
import ToursHeader from "../ToursHeader";

const tours = [
  {
    name: "tour1",
    cover: "/assets/images/card-1.jpg",
  },
  {
    name: "tour2",
    cover: "/assets/images/card-2.jpg",
  },
  {
    name: "tour3",
    cover: "/assets/images/card-3.jpg",
  },
  {
    name: "tour4",
    cover: "/assets/images/card-4.jpg",
  },
  {
    name: "tour5",
    cover: "/assets/images/card-5.jpg",
  },
  {
    name: "tour6",
    cover: "/assets/images/card-6.jpg",
  },
];

const Tours = () => (
  <Section id="tours" className="container">
    <ToursHeader />
    <div className="tours">
      {tours.map((tour) => (
        <Tour
          key={tour.name}
          linkHref={`/${tour.name}`}
          coverImg={tour.cover}
        />
      ))}
    </div>
  </Section>
);

export default Tours;
