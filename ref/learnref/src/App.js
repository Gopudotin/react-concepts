import React, { useRef } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

const App = () => {
  const footerRef = useRef(null);
  const scroll = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scroll={scroll} />
      <Body />
      <Footer ref={footerRef} />
    </>
  );
};

export default App;
