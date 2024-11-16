import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
            <div className='flex flex-col items-center space-y-2'>
                <div><img className='w-[350px]' src={logo} alt="news title" /></div>
                <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <p className='text-[#706F6F]'>{moment().format('dddd MMM YYYY LTS')}</p>
            </div>
    );
};

export default Header;