import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>My name is Terese Thulin.</h1>
        <h4>This is my dev portfolio. Have a look around!</h4>
        <Button as={AnchorLink} href="#contact">
          Get in touch
        </Button>
      </Details>
    </IntroWrapper>
  </Wrapper>
);
