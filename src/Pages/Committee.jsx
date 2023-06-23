import {React, useState} from 'react'
import Divider from '../components/HorizontalDivider'
import PersonCard from '../components/committee/PersonCard'
import HorizontalDivider from '../components/HorizontalDivider'
import VerticalDivider from '../components/committee/VerticalDivider'
import fetchAPI from '../utils/fetchAPI'
function Committee() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  return (

    <div className='flex flex-col items-start gap-6 p-6 justify-start  self-stretch border border-blue-400'>
      <div className='flex px-6 py-0 items-start gap-6  border border-x-black border-y-0'>
        <div className='flex w-[16rem] flex-col justify-center items-start text-[4rem] font-bold '>
          ORGANIZING COMMITTEE
        </div>
        <VerticalDivider />
        <div className='flex flex-col gap-6 h-fill items-start  align-top '>


        


          { (
            <div id='cards-wrapper' className='cards-wrapper'>
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
                      Subtype: 'Click on the fetch API button above',
                      Name: 'The fetched result will be shown here',
                      Designation: 'The fetched result will be shown here',
                      imgLink: 'The fetched result will be shown here',
                      Institute: 'The fetched result will be shown here',
                      ProfileLink: 'The fetched result will be shown here',
                      Institute: 'The fetched result will be shown here',
                    }}
                  />
                </>
              )}
            </div>
          )}

          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
    </div>

  )
}

export default Committee