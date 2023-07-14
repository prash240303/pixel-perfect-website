import { React, useEffect, useState } from 'react';
import SpeakerCard from '../components/Speakers/SpeakerCard';
import fetchAPI from '../utils/fetchAPI';
import '../styles/Speakers.css';

function Speakers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const endpoint = '/speakers/conference/647f315f62cdb3a26174fc38';

  useEffect(() => {
    fetchAPI(setData, setLoading, endpoint);
  }, []);

  return (
    <>
      <main className="view-container flex my-6 px-6 w-full">
        <div className="flex md:flex-row flex-col px-6 items-start justify-between w-full gap-6 border border-x-black border-y-0">
          <div className="flex flex-col md:sticky md:top-20 items-start text-[4rem] w-full md:w-2/5 font-custom font-bold">
            Speakers
          </div>
          <div className="speaker-container flex flex-col w-full px-2 md:px-6 border-l border-black">
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
                <>
                  <SpeakerCard
                    single
                    item={{
                      id: 'default',
                      Type: 'default',
                      Subtype: 'Loading',
                      Name: 'Loading',
                      Designation: 'Loading',
                      ImgLink: 'Loading',
                      Institute: 'Loading',
                      ProfileLink: 'Loading',
                      TalkType: 'loading',
                      TalkTitle: 'Loading',
                      Bio: 'Loading',
                      Abstract: 'Loading',
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Speakers;
