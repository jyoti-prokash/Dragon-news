import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='flex flex-col gap-3'>
            <button className='btn'><FaGoogle />Login with Google</button>
            <button className='btn'><FaGithub />Login with Github</button>
        </div>
    );
};

export default SocialLogin;