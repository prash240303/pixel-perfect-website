import { React, useEffect, useState } from 'react';
import fetchAPI from '../utils/fetchAPI';
import ContactCard from '../components/contact/ContactCard';
import '../styles/App.css';

function ContactUs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAPI(setData, setLoading);
  }, []);

  return (
    <main className="view-container flex  my-6 px-6 w-full">
      <div className='flex flex-row px-6 items-start justify-between w-full gap-6  border border-x-black border-y-0'>
        <div className='flex   flex-col  items-start   text-[4rem] w-[400px] font-custom font-bold '>
          CONTACT US
        </div>
        <div className='flex flex-col w-full px-6 border-l border-black'>
          {(
            <div id='cards-wrapper' className='flex w-full  item flex-col gap-6  items-start  align-top '>
              {data.length > 0 ? (
                data.map((item) => {
                  return <ContactCard key={item.id} item={item} />
                })
              ) : (
                <>
                  <ContactCard
                    single
                    item={{
                      id: 'default',
                      Type: 'default',
                      Subtype: 'Loading',
                      name: 'Loading',
                      Designation: 'Loading',
                      imgLink: 'Loading',
                      Institute: 'Loading',
                      ProfileLink: 'Loading',
                    }}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
