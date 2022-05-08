import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack web developer with a passion for creating beautiful,
        intuitive, and user-friendly websites.
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com/Juth7")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
