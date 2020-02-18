import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Terese and I’m a Web Developer & Designer" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>BFA Designer currently shapeshifting into web development at Yrgo in Göteborg, Sweden.</p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
