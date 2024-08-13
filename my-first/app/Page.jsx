// "use client"
import React from 'react';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Box from './Components/Box';
import News from './Components/News';
import Describe from './Components/Describe';
import Experts from './Components/Experts';
import Bottom from './Components/Bottom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './Components/About';
// import Home from './Components/Home';
// import Company from './Components/Company';
// import Resources from './Components/Resources';
// import Contact from './Components/Contact';

const Page = () => {
  return (
    <>
      <Header />
      <Landing />
      <Describe />
      <Box />
      <News />
      <Experts />
      <Bottom />

      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/com" element={<Company />} />
    <Route path="/res" element={<Resources />} />
    <Route path="/abt" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

    </>
  );
};

export default Page;
