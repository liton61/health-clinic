/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
const ServiceDetails = ({ detail }) => {
    const { id, title, name, fee, time, contact, button, short_description, image, designation } = detail || {};
    return (
        <div>
            <h1 className="text-center mt-5 text-4xl font-bold border-b-4 border-indigo-500 w-72 mx-auto">Service Details</h1>
            <div className="flex justify-center items-center h-[60vh]">
                <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            class="h-full w-full object-cover"
                        />
                    </div>
                    <div class="p-6 bg-pink-500/10">
                        <div className="flex justify-between">
                            <div>
                                <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {name}
                                </h6>
                                <h6 class="block font-sans text-sm font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {designation}
                                </h6>
                                <h6 class="mb-4 block font-sans text-sm font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                                    Contact : {contact}
                                </h6>
                            </div>
                            <div>
                                <h6 class="block font-sans text-sm font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {time}
                                </h6>
                                <h6 class="mb-4 block font-sans text-sm font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                                    Fee : {fee}
                                </h6>
                            </div>
                        </div>
                        <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {short_description}
                        </p>
                        <a class="inline-block" href="#">
                            <button
                                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold text-pink-500 transition-all bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Get Appointment
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;