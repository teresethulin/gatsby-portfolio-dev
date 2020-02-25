import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hello.</h1>
        <h4>My name is Terese Thulin and I'm a designer / web developer.</h4>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
      <Thumbnail></Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
