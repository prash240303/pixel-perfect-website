import React from 'react';

function Sponsers({ data }) {
  // Group sponsors by type
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
      <div className="main-wrapper w-full flex flex-row gap-8 px-6 border-x border-black">
        <div className="border-r border-black">
          <div className="font-custom font-bold w-[380px] text-7xl leading-normal">SPONSORS</div>
        </div>
        <div className="flex sponsers-list w-full flex-col px-6 gap-6">
          {Object.entries(groupedSponsors).map(([type, sponsors]) => (
            <div className="flex gap-6 w-full mb-6 flex-col" key={type}>
              <div className="font-custom font-bold text-5xl mb-4">
                {type}
              </div>
              <div className="flex flex-row gap-6">
                {sponsors.map((sponsor) => (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    key={sponsor.id}
                    className="sponsor-logo w-[320px]"
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
