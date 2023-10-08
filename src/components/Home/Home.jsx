/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
    const loadData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-4xl font-bold mt-10 mb-7 border-b-4 border-indigo-500 w-60 mx-auto'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
                {
                    loadData.map(eventData => <Services key={eventData.id} data={eventData}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;