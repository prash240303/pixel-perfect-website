
import React from 'react';

function Dates({ data }) {
  return (
    <section className="flex px-6 py-6 pb-6 w-full items-start justify-start">
      <div className="w-full flex flex-col md:flex-row justify-between pl-6 border-x border-black">
        <div className="md:border-r w-full md:w-2/5  md:border-black">
          <div className="font-custom font-bold md:text-7xl text-5xl md:sticky md:top-20 md:mb-0 mb-6">IMPORTANT DATES</div>
        </div>
        <div className="flex dates-list w-full flex-col pr-6 md:px-6 gap-6">
          {data.map((date, index) => (
          
          //for triggering the last element of the dates and remove the border b 
          <div
              className={`flex w-full justify-between${index === data.length - 1 ? '' : ' border-b border-black md:pb-6 pb-3'}`}
              key={date.id}
            >
              <div className="date font-custom font-bold w-full md:text-4xl text-3xl">
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
              <div className="flex w-full event font-bold md:text-right text-end  text-xl md:text-3xl">
              {date.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dates;
