import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
  return (
    <div className="bg-main-light dark:bg-main-dark transition-colors duration-500 min-h-screen">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
