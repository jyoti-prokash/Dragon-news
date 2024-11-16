import React from 'react';
import { FaShareNodes } from 'react-icons/fa6';
import { LuEye } from 'react-icons/lu';

const NewsCard = ({data}) => {
    console.log(data);
    return (
        <div className="mt-5 rounded-lg shadow-lg border border-gray-200 p-4">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <div className='flex items-center'>
                    <img className='w-14'
                        src={data.author.img}
                    />
                    <div className="ml-3">
                        <h4 className="text-sm font-semibold">{data.author.name}</h4>
                        <span className="text-xs text-gray-500">{data.author.published_date}</span>
                    </div>
                </div>
                <div className='text-xl'><FaShareNodes /></div>
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-3">
                {data.title}
            </h3>
            {/* Image */}
            <img
                src={data.image_url}
            />
            {/* Content */}
            <p className="text-sm text-gray-600">
                {
                    data.details
                }
            </p>
            <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
                Read More
            </a>
            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-semibold">{data.rating.number}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.141 3.506a1 1 0 00.95.69h3.7c.969 0 1.372 1.24.588 1.81l-2.996 2.118a1 1 0 00-.364 1.118l1.141 3.506c.3.921-.755 1.688-1.538 1.118l-2.996-2.118a1 1 0 00-1.176 0l-2.996 2.118c-.783.57-1.838-.197-1.538-1.118l1.141-3.506a1 1 0 00-.364-1.118L2.184 8.933c-.784-.57-.38-1.81.588-1.81h3.7a1 1 0 00.95-.69l1.141-3.506z" />
                    </svg>
                </div>
                <div className="text-gray-400 flex items-center">
                    <LuEye /> 
                    <span className="text-sm ml-1">{data.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;