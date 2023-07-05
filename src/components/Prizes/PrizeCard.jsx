import React, { useState } from 'react';

function PrizeCard({ item }) {
  console.log('prize data: ', item);
  const [showMore, setShowMore] = useState(false);

  function handleReadmore() {
    setShowMore(!showMore);
  }


  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 ">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.title1}</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.title2}</h1>
          <p class="leading-relaxed mb-3 text-justify">{item.description}</p>
          
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>
  );
}

export default PrizeCard;
