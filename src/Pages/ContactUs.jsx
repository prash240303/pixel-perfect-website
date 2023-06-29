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
    <div className=' p-0 m-0 flex items-center self-stretch'>
      <div className='flex flex-col gap-6 px-6 py-6 border self-stretch border-blue-400'>
        {data.length > 0 ? (
          data.map((item) => {
            return <ContactCard key={item.id} item={item} />;
          })
        ) : (
          <>
            <ContactCard
              single
              item={{
                id: 'default',
                title: 'Loading',
                Name: 'Loading',
                Designation: 'Loading',
                imgLink: 'Loading',
                Institute: 'Loading',
                ProfileLink: 'Loading',
                phone: 'Loading',
                email: 'Loading',
                fax: 'Loading',
                feature: 'Loading',
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
