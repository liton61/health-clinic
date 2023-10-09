import { useLoaderData } from "react-router-dom";
import Midwife from "../Midwife/Midwife";

const Midwives = () => {
    const loadMidwife = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-4xl my-10 font-bold border-b-4 border-indigo-500 w-72 mx-auto">Our Midwives</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
                {
                    loadMidwife.map(midwives => <Midwife key={midwives.id} midwife={midwives}></Midwife>)
                }
            </div>
        </div>
    );
};

export default Midwives;