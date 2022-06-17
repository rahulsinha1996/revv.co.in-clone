

import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import CarouselBanner from "./Components/Dashboard/CarouselBanner";
import Footer from "./Components/Dashboard/Footer";
import Last from "./Components/Dashboard/Last";
import Process from "./Components/Dashboard/Process";
import Testimonials from "./Components/Dashboard/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselBanner />
      <Process />
      <Testimonials />
      <Footer />
      <Last />
    </div>
  );
}

export default App;
