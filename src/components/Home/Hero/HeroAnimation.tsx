"use client";

import { TypeAnimation } from "react-type-animation";

interface HeroAnimationProps {
  sequence: string[];
}

const HeroAnimation = ({ sequence }: HeroAnimationProps) => {
  const animationSequence = sequence.flatMap((text) => [text, 2500]);

  return (
    <section className="text-center">
      <TypeAnimation
        sequence={animationSequence}
        wrapper="p"
        speed={50}
        style={{ display: "block" }}
        className="mt-2 text-lg font-medium text-muted-foreground sm:text-xl"
        repeat={Infinity}
      />
    </section>
  );
};

export default HeroAnimation;
