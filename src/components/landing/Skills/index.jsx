import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import BigBurger from 'assets/illustrations/big-burger.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={BigBurger} alt="I’m Terese and I’m a Web Developer & Designer" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>BFA Designer with experience in print, digital design, and web development.</p>
        <Button as={AnchorLink} href="#contact">
          Ask me something
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
