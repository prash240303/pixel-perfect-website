import React from 'react';
import './Home.css';
import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Announcement';
import About from '../components/Home/About';
import Dates from '../components/Home/Dates';
import Sponsers from '../components/Home/Sponsers';
import Prizes from '../components/Home/Prizes';

function Home() {
  return (
    <>
      <main className="view-container flex flex-col mt-6 w-full">
       <Hero/>
       <Announcement/>
       <About/>
       <Dates/>
       <Sponsers/>  
       <Prizes/>
      </main>
    </>
  );
}

export default Home;
