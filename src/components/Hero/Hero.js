import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nonpadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Aldycky Bagus Witjaksana. I'm mostly doing Backend
        Development to provide REST API and sometimes I'm also doing Frontend
        Development especially for Website Application.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
