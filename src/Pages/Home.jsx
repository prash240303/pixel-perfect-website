import './Home.css';
import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Announcement';
import About from '../components/Home/About';
import Dates from '../components/Home/Dates';
import Sponsers from '../components/Home/Sponsers';
import Prizes from '../components/Home/Prizes';
import fetchAPI from '../utils/fetchAPI';
import { React, useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAPI(setData, setLoading);
  }, []);
  console.log("home fetched data", data)
  return (
    <>
      <main className="view-container flex flex-col mt-6 w-full">
        {/* {(
          <div id='wrapper'>
            {data.length > 0 ? (
              data.map((item) => {
                return (
                  <Hero key={item.confId} item={item} />
                  )
                })
                ) : (
                  <>
                <Hero
                  single
                  item={{
                    id: 'default',
                    confName: "conf"
                     
                  }}
                />


              </>
            )}
          </div>
        )} */}
        <Hero/>
        <Announcement />
        <About />
        <Dates />
        <Sponsers />
        <Prizes />
      </main>

    </>
  );
}

export default Home;
