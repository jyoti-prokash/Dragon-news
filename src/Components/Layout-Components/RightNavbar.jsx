import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightNavbar = () => {
    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>Login with</h2>
            <SocialLogin></SocialLogin>
            <h2 className='font-semibold text-lg mt-5'>Find US On</h2>
            <section className='mt-5'><FindUs></FindUs></section>
        </div>
    );
};

export default RightNavbar;