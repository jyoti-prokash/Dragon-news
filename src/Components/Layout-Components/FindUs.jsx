import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='flex flex-col gap-3 border-2 p-3'>
            <button className='btn text-xl justify-start'><FaFacebook />Facebook</button>
            <button className='btn text-xl justify-start'><FaSquareXTwitter />X Twitter</button>
            <button className='btn text-xl justify-start'><FaInstagramSquare />Instagram</button>
        </div>
    );
};

export default FindUs;