import {React, useEffect, useState} from 'react'
import PersonCard from '../components/committee/PersonCard'
import VerticalDivider from '../components/VerticalDivider'
import fetchAPI from '../utils/fetchAPI'
import Card from '../components/card'
function Committee() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAPI(setData, setLoading);
  }, []);
  console.log(data)
  
  return (
    <div className='flex flex-col w-[100vw] items-start gap-6 p-6 justify-start  self-stretch border border-blue-400'>
      <div className='flex px-6 items-start gap-6  border border-x-black border-y-0'>
        <div className='flex w-[18rem] flex-col justify-center items-start text-[4rem] font-bold '>
          ORGANIZING COMMITTEE
        </div>
        <VerticalDivider />
          { (
            <div id='cards-wrapper' className='flex  item flex-col gap-6  items-start  align-top '>
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
                      Subtype: 'Loading',
                      Name: 'Loading',
                      Designation: 'Loading',
                      imgLink: 'Loading',
                      Institute:'Loading',
                      ProfileLink: 'Loading',
                    }}
                  />
                </>
              )}
            </div>
          )}

         
      </div>

    </div>



  )
}

export default Committee