/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
const ServiceDetails = ({ detail }) => {
    const { id, name, price, button, short_description, image } = detail || {};
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Service Details</h1>
            <div className="flex justify-center items-center h-[70vh]">
                <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            class="w-full object-cover"
                        />
                        <div className="ml-2 mt-3">
                            <p className="text-lg font-semibold">Duration : 6 months</p>
                            <p className="text-lg font-semibold">Total Videos : 900</p>
                            <p className="text-lg font-semibold">Support : 3 Times in a day</p>
                            <p className="text-lg font-semibold">Reward : Job placement</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {name}
                        </h6>
                        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Lyft launching cross-platform service this week
                        </h4>
                        <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {short_description}
                        </p>
                        <a class="inline-block" href="#">
                            <button
                                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;