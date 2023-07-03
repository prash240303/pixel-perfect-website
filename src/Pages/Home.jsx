import './Home.css';
import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Announcement';
import About from '../components/Home/About';
import Dates from '../components/Home/Dates';
import Sponsers from '../components/Home/Sponsers';
import Prizes from '../components/Home/Prizes';
import fetchAPI from '../utils/fetchAPI';
import { React, useEffect, useState } from 'react';

function Home() {
  const [heroData, setHeroData] = useState({});
  const [datesData, setDatesData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [sponsersData, setSponsersData] = useState([]);
  const [annoucementData, setAnnoucementData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const heroEndPoint = "/home/conf/647f315f62cdb3a26174fc38";
  const datesEndPoint = "/eventDates/conference/647f315f62cdb3a26174fc38";
  const sponsersEndPoint = "/sponsors/conference/647f315f62cdb3a26174fc38";
  const imageEndPoint = "/images/647f315f62cdb3a26174fc38";
  const announcementEndPoint = "/announcement/conf/647f315f62cdb3a26174fc38";

  useEffect(() => {
    fetchAPI(setHeroData, setLoading, heroEndPoint);
    fetchAPI(setDatesData, setLoading, datesEndPoint);
    fetchAPI(setSponsersData, setLoading, sponsersEndPoint);
    fetchAPI(setImageData, setLoading, imageEndPoint);
    fetchAPI(setAnnoucementData, setLoading, announcementEndPoint)
  }, []);

  // Get the first image with name "WIE"
  const heroImage = imageData.find((image) => image.name === "WIE") || {};
  
  return (
    <>
      {loading ? (
        <div className="font-bold text-lg">Loading...</div> // Render a loading indicator when loading is true
      ) : (
        <main className="view-container flex flex-col mt-6 w-full">
          <Hero data={heroData} image={heroImage} />
          <Announcement data={annoucementData} />
          <About data={heroData} />
          <Dates data={datesData} />
          <Sponsers data={sponsersData} />
          <Prizes />
        </main>
      )}
    </>
  );
}

export default Home;
