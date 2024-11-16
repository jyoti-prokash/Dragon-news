import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='text-lg flex items-center gap-3 bg-gray-300 py-2 px-2'>
            <p className='bg-red-500 px-5 py-2 text-white font-bold rounded'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'><p>Poland Condemns Monument Vandalism: A Warsaw Ghetto Uprising memorial was defaced with red paint, sparking condemnation and calls to combat antisemitism,</p>
                <p>Thermobaric Drones in Ukraine: Russia employs decoy swarms and deadly drones in attacks on Ukraine-
                    THE TIMES OF ISRAEL </p>
            </Marquee>
        </div>
    );
};
export default LatestNews;