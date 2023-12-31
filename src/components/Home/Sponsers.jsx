import React from 'react';

function Sponsers({ data }) {
  const groupedSponsors = data.reduce((groups, sponsor) => {
    const type = sponsor.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(sponsor);
    return groups;
  }, {});

  return (
    <section className="sponsers-section px-6 py-6 pb-6 w-full items-start border-t border-black justify-start">
      <div className="main-wrapper w-full flex flex-col md:flex-row justify-between pl-6 border-x border-black">
        <div className=" w-full md:w-2/5 md:border-r md:border-black">
          <div className="font-custom font-bold md:sticky md:top-20 md:h-20 md:text-7xl text-5xl md:mb-0 mb-3 leading-normal bg-white">SPONSORS</div>
        </div>
        <div className="flex sponsers-list w-full flex-col md:px-6 gap-6">
          {Object.entries(groupedSponsors).map(([type, sponsors]) => (
            <div className="flex gap-6 w-full mb-6 flex-col" key={type}>
              <div className="font-custom font-bold text-5xl mb-4">
                {type}
              </div>
              <div className="flex flex-row flex-wrap  gap-6">
                {sponsors.map((sponsor) => (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    key={sponsor.id}
                    className="sponsor-logo w-[250px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsers;
