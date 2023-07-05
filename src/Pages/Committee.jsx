import { React, useEffect, useState } from 'react'
import PersonCard from '../components/committee/PersonCard'
import fetchAPI from '../utils/fetchAPI'
import "../styles/Committee.css"
function Committee() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const endPoint = '/committees/conference/647f315f62cdb3a26174fc38'
  useEffect(() => {
    fetchAPI(setData, setLoading, endPoint);
  }, []);
  console.log(data)
  return (
    <>
      <main className="view-container flex  my-6 px-6 w-full">
        <div className='flex md:flex-row flex-col px-6 items-start justify-between w-full gap-6  border border-x-black border-y-0'>
          <div className='flex   flex-col  items-start   text-[4rem] w-[400px] font-custom font-bold '>
            ORGANIZING COMMITTEE
          </div>
          <div className=' committee-container  flex flex-col  w-full overflow-hidden md:px-6 border-l border-black'>
           {(
            <div id='cards-wrapper' className='flex w-full  item flex-col gap-6  items-start  align-top '>
              {data.length > 0 ? (
                data.map((item) => {
                  return <PersonCard key={item.id} item={item} />
                })
              ) : (
                <>
                  <PersonCard
                    single
                    item={{
                      id: 'default',
                      Type: 'default',
                      Subtype: 'Loading',
                      Name: 'Loading',
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
    </>
  )
}

export default Committee