import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';

const indexPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);

export default indexPage;
