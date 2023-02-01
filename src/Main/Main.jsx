import "./Main.css";
import Tours from "../Tours/Tours";
import Reviews from "../Reviews/Reviews";
import CreateTour from "../CreateTour/CreateTour";
import Gallery from "../Gallery/Gallery";
import Stories from "../Stories/Stories";
import Cta from "../Cta/Cta";

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
