import { React, useState, useEffect } from 'react'
import PrizeCard from '../Prizes/PrizeCard';
import fetchAPI from '../../utils/fetchAPI';
function Prizes() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const endPoint = "/awards/conference/647f315f62cdb3a26174fc38";
    useEffect(() => {
        fetchAPI(setData, setLoading, endPoint);
    }, []);
    return (
        <section className="prizes-section  py-6 px-6  pb-6 w-full items-start  border-t  border-black justify-start">
            <div className='main-wrapper w-full flex flex-col gap-8  px-6 border-x  border-black '>
                <div className='  text-7xl'>
                    <div className='font-custom font-bold leading-normal'>AWARDS</div>
                </div>
            </div>

            {<div className='flex flex-col justify-between md:flex-row border-x border-black'>
                {data.length > 0 ? (
                    data.map((item) => {
                        return <PrizeCard key={item.id} item={item} />;
                    })
                ) : (
                    <>
                        <PrizeCard
                            single
                            item={{
                                id: "default",
                                title1: "loading",
                                title2: "loading",
                                description: "loading",
                            }}
                        />
                    </>
                )}
            </div>
            }
        </section>

    )
}

export default Prizes



