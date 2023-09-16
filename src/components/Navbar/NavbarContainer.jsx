import Navbar from "./Navbar";
import { useState, useEffect, useCallback } from "react";

const NavbarContainer = () => {
  const [isFixed, setFixed] = useState(false);
  const breakPoint = 450;

  const handleScroll = useCallback(
    () => {
      if (!isFixed && window.scrollY > breakPoint) {
        setFixed(true);
      }
      if (isFixed && window.scrollY <= breakPoint) {
        setFixed(false);
      }
    },
    [isFixed]
  );

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return <Navbar isFixed={isFixed} />;
};

export default NavbarContainer;
