import { React, useEffect, useState } from 'react';
import PersonCard from '../components/committee/PersonCard';
import fetchAPI from '../utils/fetchAPI';
import LoadingIcon from '../components/LoadingIcon';

function Committee() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const endPoint = '/committees/conference/647f315f62cdb3a26174fc38';

  useEffect(() => {
    fetchAPI(setData, setLoading, endPoint);
  }, []);

  return (
    <>
       <main className="flex flex-col my-6 px-6 w-full">
      <div className="flex flex-col md:flex-row px-6 items-start justify-between w-full gap-6  border-x border-black  ">
        <div className="flex md:sticky md:top-20  flex-col flex-wrap   md:text-7xl text-5xl font-custom font-bold ">
        ORGANISING COMMITTEE
                </div>
        <div  id="cards-wrapper" className="flex flex-col gap-6 w-full items-end px-2 md:px-6 md:border-l md:border-black">
              {data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <PersonCard
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
      </main>
    </>
  );
}

export default Committee;
