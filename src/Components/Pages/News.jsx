import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const News = () => {
    const {data} = useLoaderData()
    return (
        <div>
            <h2 className='text-lg font-semibold'>Dragon News Home</h2>
            <div>
                {
                    data.map(singleNews=> <NewsCard data={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default News;