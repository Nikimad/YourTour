import { useState } from "react";
import "./Tours.css";
import Section from "../Section";
import Tour from "../Tour";
import ToursHeader from "../ToursHeader";
import { categories, tours } from "../../data/tours";

const Tours = () => {
  const [active, setActive] = useState("popular");
  const visibleTours = tours.filter((tour) => tour.categories.includes(active));

  return (
    <Section id="tours" className="container">
      <ToursHeader categories={categories} active={active} onChange={setActive} />
      <div className="tours">
        {visibleTours.map(({ slug, title, price, cover }) => (
          <Tour
            key={slug}
            title={title}
            price={price}
            linkHref="#create-tour"
            coverImg={cover}
          />
        ))}
      </div>
    </Section>
  );
};

export default Tours;