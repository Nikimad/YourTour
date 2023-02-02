import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const NavbarContainer = () => {
  const [isFixed, setFixed] = useState(false);
  const breakPoint = 450;
  
  const handleScroll = (e) => {
    setFixed(e.target.documentElement.scrollTop > breakPoint);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return <Navbar isFixed={isFixed} />;
};

export default NavbarContainer;
