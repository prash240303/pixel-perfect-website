// import { React, useEffect, useState } from "react";
// import fetchAPI from "../utils/fetchAPI";
// import ContactCard from "../components/contact/ContactCard";
// import "../styles/App.css";
// import "../styles/ContactUs.css"

// function ContactUs() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const endPoint = "/contacts/647f315f62cdb3a26174fc38";

//   useEffect(() => {
//     fetchAPI(setData, setLoading, endPoint);
//   }, []);

//   return (
//     <main className="view-container flex flex-col my-6 px-6 w-full  ">
//       <div className="veiw-inner-container flex flex-col md:flex-row px-6 items-start justify-between w-full gap-6  border border-x-black  border-y-0">
//         <div className="flex md:sticky md:top-20  flex-col  items-start   text-[4rem] w-full font-custom font-bold ">
//           CONTACT US
//         </div>
//         <div className="flex contact-container flex-col items-start w-full px-6 overflow-hidden border-l border-black">
//           {
//             <div
//               id="cards-wrapper"
//               className="flex w-full  item flex-col gap-6  items-start  align-top "
//             >
//               {data.length > 0 ? (
//                 data.map((item) => {
//                   return <ContactCard key={item.id} item={item} />;
//                 })
//               ) : (
//                 <>
//                   <ContactCard
//                     single
//                     item={{
//                       id: "default",
//                       Type: "default",
//                       Subtype: "Loading",
//                       name: "Loading",
//                       Designation: "Loading",
//                       imgLink: "Loading",
//                       Institute: "Loading",
//                       ProfileLink: "Loading",
//                     }}
//                   />
//                 </>
//               )}
//             </div>
//           }
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row px-6 items-start mt-6 justify-between w-full gap-6 border  border-x-black border-y-0">
//         <div className="flex   flex-col w-full items-start  py-6 border-t border-black gap-6 ">
//           <div className=" text-5xl font-bold  leading-normal font-custom uppercase">
//             Reach to us
//           </div>
//           <div className="flex flex-col md:flex-row w-full gap-6">
//             <div className="md:block hidden pr-6 border-r  border-black">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622730186928!2d75.53326897492673!3d31.395874574271303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1688044920371!5m2!1sen!2sin"
//                 width={800}
//                 height={400}
//                 style={{ borderRadius: "20px" }}
//                 allowfullscreen="true"
//                 loading="lazy"
//                 referrerpolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             <div className="flex flex-col font-medium text-2xl gap-3">
//               <p>Indian Institute of Technology Gandhinagar</p>
//               <p>Palaj, Gandhinagar - 382355, Gujarat, India</p>
//               <a href="">
//                 <div className="mt-6 flex items-center w-full  justify-center  py-6 text-2xl font-semibold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase">
//                   <a href="https://maps.google.com/maps/dir//Dr+B+R+Ambedkar+National+Institute+of+Technology+Jalandhar+Grand+Trunk+Road+Barnala+-+Amritsar+Bypass+Rd+Jalandhar,+Punjab+144011/@31.3958746,75.5358439,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x391a51d30c180edf:0x5b7633718d17ef33">
//                     Veiw on Maps
//                   </a>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ContactUs;



import { React, useEffect, useState } from 'react';
import fetchAPI from '../utils/fetchAPI';
import ContactCard from '../components/contact/ContactCard';
import '../styles/App.css';
import '../styles/ContactUs.css';

function ContactUs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const endPoint = '/contacts/647f315f62cdb3a26174fc38';

  useEffect(() => {
    fetchAPI(setData, setLoading, endPoint);
  }, []);

  return (
    <main className="view-container flex flex-col my-6 px-6 w-full">
      <div className="veiw-inner-container flex flex-col md:flex-row px-6 items-start justify-between w-full gap-6  border border-x-black  border-y-0">
        <div className="flex md:sticky md:top-20  flex-col  items-start   text-[4rem] w-full font-custom font-bold ">
          CONTACT US
        </div>
        <div className="flex contact-container flex-col items-start w-full px-6 overflow-hidden border-l border-black">
          <div id="cards-wrapper" className="flex w-full item flex-col gap-6 items-start align-top">
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <ContactCard
                    key={item.id}
                    item={item}
                    lastCard={index === data.length - 1}
                  />
                );
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
        </div>
      </div>



      <div className="flex flex-col md:flex-row px-6 items-start mt-6 justify-between w-full gap-6 border  border-x-black border-y-0">
        <div className="flex   flex-col w-full items-start  py-6 border-t border-black gap-6 ">
          <div className=" text-5xl font-bold  leading-normal font-custom uppercase">
            Reach to us
          </div>
          <div className="flex flex-col md:flex-row w-full gap-6">
            <div className="md:block hidden pr-6 border-r  border-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622730186928!2d75.53326897492673!3d31.395874574271303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1688044920371!5m2!1sen!2sin"
                width={800}
                height={400}
                style={{ borderRadius: "20px" }}
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-col font-medium text-2xl gap-3">
              <p>Indian Institute of Technology Gandhinagar</p>
              <p>Palaj, Gandhinagar - 382355, Gujarat, India</p>
              <a href="">
                <div className="mt-6 flex items-center w-full  justify-center  py-6 text-2xl font-semibold bg-[#141414] hover:bg-zinc-800 text-white rounded-full uppercase">
                  <a href="https://maps.google.com/maps/dir//Dr+B+R+Ambedkar+National+Institute+of+Technology+Jalandhar+Grand+Trunk+Road+Barnala+-+Amritsar+Bypass+Rd+Jalandhar,+Punjab+144011/@31.3958746,75.5358439,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x391a51d30c180edf:0x5b7633718d17ef33">
                    Veiw on Maps
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;


