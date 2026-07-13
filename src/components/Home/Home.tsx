import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import SiteFooter from "./Footer/SiteFooter";
import { Main, Section } from "components/ui/layout";

const Home = () => {
  return (
    <Main className="bg-main-light dark:bg-main-dark min-h-screen transition-colors duration-500">
      <Section id="home">
        <Hero />
      </Section>

      <Section id="about">
        <About />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <Section id="experience">
        <Experience />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <SiteFooter />
    </Main>
  );
};

export default Home;
