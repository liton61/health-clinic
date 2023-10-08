/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ data }) => {
    const { id, title, rating, name, price, button, short_description, image } = data;
    return (
        <div>
            <div className="relative flex w-96 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-52 w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Rating : {rating}
                        </p>
                    </div>
                    <p className="block text-justify font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {short_description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/details/${id}`}>
                        <button
                            className="btn btn-neutral block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            {button}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;