import React from 'react';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Pricetag from './components/Pricetag';
import DownPrice from './components/DownPrice';
import AllProducts from './components/AllProducts';

const page = () => {
  return (
    <>
    <Hero></Hero>
     <Pricetag></Pricetag>
     <DownPrice></DownPrice>
     <AllProducts></AllProducts>
    </>
  );
};

export default page;