import "../styles/Home.css";
import Hero from "../components/Home/Hero";
import Announcement from "../components/Home/Announcement";
import About from "../components/Home/About";
import Dates from "../components/Home/Dates";
import Sponsers from "../components/Home/Sponsers";
import Prizes from "../components/Home/Prizes";
import fetchAPI from "../utils/fetchAPI";
import LoadingIcon from "../components/LoadingIcon";
import { React, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    // Define a helper function to fetch data and update state
    const fetchData = async () => {
      // Introduce a 3-second delay using setTimeout
      setTimeout(async () => {
        await Promise.all([
          fetchAPI(setHeroData, setLoading, heroEndPoint),
          fetchAPI(setDatesData, setLoading, datesEndPoint),
          fetchAPI(setSponsersData, setLoading, sponsersEndPoint),
          fetchAPI(setImageData, setLoading, imageEndPoint),
          fetchAPI(setAnnoucementData, setLoading, announcementEndPoint),
        ]);
      }, 3000); // 3 seconds delay
    };

    fetchData(); // Call the helper function to fetch data and update state
  }, []);

  const heroImage =
    imageData.find((image) => image.name === "WIE volunteers") || {};
  return (
    <>
      <main className="flex flex-col mt-6 w-full max-w-8xl mx-auto">
        {loading ? (
          // <LoadingIcon />
          // <>
          //   <div className="flex flex-col gap-12">
          //     <Skeleton count={1} className="mx-12 h-10 mb-6" />
          //     <div className="flex gap-6 w-full border border-black">
          //       <Skeleton count={3} className="mx-12 h-10 w-fill mb-6" />
          //       <Skeleton count={3} className="mx-12 h-10 w-fll mb-6"/>
          //     </div>
          //   </div>
          // </>
          <LoadingIcon/>
        ) : (
          <>
            <Hero data={heroData} image={heroImage} />
            <Announcement data={annoucementData} />
            <About data={heroData} />
            <Dates data={datesData} />
            <Sponsers data={sponsersData} />
            <Prizes />
          </>
        )}
      </main>
    </>
  );
}

export default Home;
