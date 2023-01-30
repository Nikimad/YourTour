import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { navbarBreakPoint as breakPoint } from ".";

const NavbarContainer = () => {
  const [isFixed, setFixed] = useState(false);

  const handleScroll = (e) => {
    setFixed(e.target.documentElement.scrollTop > breakPoint);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isFixed={isFixed} />
    </>
  );
};

export default NavbarContainer;
