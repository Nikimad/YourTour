import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const BREAKPOINT = 450;

const NavbarContainer = () => {
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setFixed(window.scrollY > BREAKPOINT);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Navbar isFixed={isFixed} />;
};

export default NavbarContainer;