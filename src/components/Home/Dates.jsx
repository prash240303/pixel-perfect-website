import React from 'react';

function Dates({ data }) {
  return (
    <section className="dates-section flex px-6 py-6 pb-6 w-full items-start justify-start">
      <div className="main-wrapper w-full flex flex-col md:flex-row justify-between pl-6 border-x border-black">
        <div className="border-r w-full md:w-2/5 border-black">
          <div className="font-custom font-bold text-7xl">IMPORTANT DATES</div>
        </div>
        <div className="flex dates-list w-full flex-col md:px-6 gap-6">
          {data.map((date) => (
            <div
              className={`flex w-full justify-between border-b border-black pb-6 ${
                date.newDate ? 'strikethrough' : ''
              }`}
              key={date.id}
            >
              <div className="date font-custom font-bold w-full text-4xl">
                {date.newDate ? (
                  <>
                    <strike>
                      {new Date(date.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </strike>
                    <br />
                    {new Date(date.newDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </>
                ) : (
                  new Date(date.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })
                )}
              </div>
              <div className="flex w-full event font-bold text-3xl">{date.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dates;
