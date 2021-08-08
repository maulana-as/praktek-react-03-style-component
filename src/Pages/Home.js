import React from 'react';
import { Navbar, Header, Menu, HeaderNews, HeadLine } from '../Components';
import '../App.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Menu />
      <HeaderNews />
      <HeadLine />
    </div>
  );
}

export default Home;
