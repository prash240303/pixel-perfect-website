import React from 'react';
import './Home.css';
import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Announcement';
import About from '../components/Home/About';

function Home() {
  return (
    <>
      <main className="view-container flex flex-col mt-6 w-full">
       <Hero/>
       <Announcement/>
       <About/>
      </main>
    </>
  );
}

export default Home;
