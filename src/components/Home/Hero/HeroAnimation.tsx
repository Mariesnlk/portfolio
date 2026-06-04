"use client";

import { TypeAnimation } from "react-type-animation";
import { Box } from "components/ui/layout";

interface HeroAnimationProps {
  sequence: string[];
}

const HeroAnimation = ({ sequence }: HeroAnimationProps) => {
  const animationSequence = sequence.flatMap((text) => [text, 2500]);

  return (
    <Box className="text-center">
      <TypeAnimation
        sequence={animationSequence}
        wrapper="p"
        speed={50}
        style={{ display: "block" }}
        className="mt-2 text-lg font-medium text-muted-foreground sm:text-xl"
        repeat={Infinity}
      />
    </Box>
  );
};

export default HeroAnimation;
