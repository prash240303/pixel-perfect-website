import React, { useState, useEffect } from 'react';
import PrizeCard from '../Prizes/PrizeCard';
import fetchAPI from '../../utils/fetchAPI';

function Prizes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const endPoint = "/awards/conference/647f315f62cdb3a26174fc38";

  useEffect(() => {
    fetchAPI(setData, setLoading, endPoint);
  }, []);

  return (
    <section className="px-6 py-6 pb-6 w-full items-start border-t border-black justify-start">
      <div className="w-full flex flex-col md:flex-row justify-between pl-6 border-x border-black">
      <div className=" w-full md:w-2/5 md:border-r md:border-black">
          <div className="font-custom font-bold md:sticky md:top-20 md:h-20 md:text-7xl text-5xl md:mb-0 mb-3 leading-normal bg-white">AWARDS</div>
        </div>
        <div className="grid grid-cols-1 justify-center md:pl-6  w-full md:grid-cols-3 gap-6 md:gap-0 ">
          {data.length > 0 ? (
            data.map((item) => {
              return <PrizeCard key={item.id} item={item} />;
            })
          ) : (
            <>
              <PrizeCard
                single
                item={{
                  id: "default",
                  title1: "loading",
                  title2: "loading",
                  description: "loading",
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Prizes;
