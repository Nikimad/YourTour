import { useState } from "react";
import ToursHeader from "./ToursHeader";

const ToursHeaderContainer = () => {
  const [active, setActive] = useState("popular");
  const handleActive = (e, name) => {
    e.preventDefault();

    setActive(name);
  };

  return <ToursHeader active={active} setActive={handleActive} />;
};

export default ToursHeaderContainer;
