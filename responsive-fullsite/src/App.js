import React from "react";
import { Navbar, Brand, CTA } from "./components";
import "./App.css";
import Cta from "./components/cta/Cta";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  header,
  Header,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
