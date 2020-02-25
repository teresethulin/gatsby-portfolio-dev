import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import BigBurger from 'assets/illustrations/big-burger.svg';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, LogoWrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <LogoWrapper>
      <Link to="/">
        <h4>terese thulin </h4>
        <img src={BigBurger} alt="I’m Terese and I’m a Web Developer & Designer" />
      </Link>
    </LogoWrapper>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
