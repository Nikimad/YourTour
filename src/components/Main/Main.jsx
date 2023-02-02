import "./Main.css";
import Tours from "../Tours";
import Reviews from "../Reviews";
import CreateTour from "../CreateTour";
import Gallery from "../Gallery";
import Stories from "../Stories";
import Cta from "../Cta";

const Main = () => {
  return (
    <main className="main">
      <Tours />
      <CreateTour />
      <Reviews />
      <Gallery />
      <Stories />
      <Cta />
    </main>
  );
};

export default Main;
