import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="bg-main-light dark:bg-main-dark transition-colors duration-500 min-h-screen">
     <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default Home;
