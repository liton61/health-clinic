/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ data }) => {
    const { id, title, fee, rating, name, price, button, short_description, image } = data;
    return (
        <div>
            <div className="relative flex w-96 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={image} alt="profile-picture" />
                    <div className="p-6 flex justify-between">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                        <p className='text-lg font-semibold'>Fee : {fee}</p>
                    </div>
                </div>
                <div className="p-6 text-justify">
                    <p className="block bg-clip-text font-sans text-base font-medium">
                        {short_description}
                    </p>
                </div>
                <div className="flex justify-center pb-3">
                    <Link to={`/details/${id}`}>
                        <button className='btn btn-neutral'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;