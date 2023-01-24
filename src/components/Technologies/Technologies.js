import React from "react";
import { DiFirebase, DiReact, DiAndroid } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've experienced with a range of technologies in the web development
      world. From Back-End to Front-End. But I've experienced more in Back-End
      Development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Express JS, Laravel, CodeIgniter, Golang, and SpringBoot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React JS and Vue JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile Develoment</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Java and React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
