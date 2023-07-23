import { React, useEffect, useState } from 'react';
import SpeakerCard from '../components/Speakers/SpeakerCard';
import fetchAPI from '../utils/fetchAPI';
import '../styles/Speakers.css';
import LoadingIcon from '../components/LoadingIcon';

function Speakers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const endpoint = '/speakers/conference/647f315f62cdb3a26174fc38';

  useEffect(() => {
    fetchAPI(setData, setLoading, endpoint);
  }, []);

  return (
    <>
      <main className="flex my-6 px-6 w-full  max-w-8xl mx-auto">
        <div className="flex md:flex-row flex-col px-6 items-start justify-between w-full gap-6 border border-x-black border-y-0">
          <div className="flex flex-col md:sticky md:top-20 items-start md:text-6xl text-5xl w-full md:w-2/5 font-custom font-bold">
            Speakers
          </div>
          <div className="flex flex-col w-full px-2 md:px-6 md:border-l md:border-black">
            <div id="cards-wrapper" className="flex w-full item flex-col gap-6 items-start align-top">
              {data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <SpeakerCard
                      key={item.id}
                      item={item}
                      lastCard={index === data.length - 1}
                    />
                  );
                })
              ) : (
                <LoadingIcon/>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Speakers;
