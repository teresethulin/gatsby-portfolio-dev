import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Wrapper>
      <Overlay sidebar={showSidebar} onClick={() => setShowSidebar(!showSidebar)} />
      <Navbar />
      <Hamburger sidebar={showSidebar} toggle={setShowSidebar} />
      <Sidebar sidebar={showSidebar} toggle={() => setShowSidebar(!showSidebar)} />
    </Wrapper>
  );
};
