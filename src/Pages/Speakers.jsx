import { React, useEffect, useState } from 'react'
import SpeakerCard from '../components/Speakers/SpeakerCard'
import fetchAPI from '../utils/fetchAPI'
function Speakers() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const endpoint = "/speakers/conference/647f315f62cdb3a26174fc38"
    useEffect(() => {
        fetchAPI(setData, setLoading, endpoint);

    }, []);
    console.log(data)
    return (
        <>
            <main className="view-container flex  my-6 px-6 w-full">
                <div className='flex flex-row px-6 items-start justify-between w-full gap-6  border border-x-black border-y-0'>
                    <div className='flex   flex-col  items-start   text-[4rem] w-[400px] font-custom font-bold '>Speakers </div>
                    <div className='flex flex-col w-full px-6 border-l border-black'>
                        {(
                            <div id='cards-wrapper' className='flex w-full  item flex-col gap-6  items-start  align-top '>
                                {data.length > 0 ? (
                                    data.map((item) => {
                                        return <SpeakerCard key={item.id} item={item} />
                                    })
                                ) : (
                                    <>
                                        <SpeakerCard
                                            single
                                            item={{
                                                id: 'default',
                                                Type: 'default',
                                                Subtype: 'Loading',
                                                Name: 'Loading',
                                                Designation: 'Loading',
                                                ImgLink: 'Loading',
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

export default Speakers