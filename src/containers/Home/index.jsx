import React from "react";
import CardList from "../../components/cardList";

import Header from "../../components/header";
import Slider from "../../components/slider";
import Description from "../../components/description";
import About from "../../components/about";
import Footer from "../../components/footer";
import useScrollTop from "../../hooks/useScrollTop";

export default function Home() {
  useScrollTop();
  return (
    <>
      <Header />
      <Slider />
      <CardList />
      <Description />
      <Description right />
      <About />
      <Footer />
    </>
  );
}
