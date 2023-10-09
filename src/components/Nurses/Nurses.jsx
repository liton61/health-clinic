import { useLoaderData } from "react-router-dom";
import Nurse from "../Nurse/Nurse";

const Nurses = () => {
    const loadNurse = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-4xl my-10 font-bold border-b-4 border-indigo-500 w-72 mx-auto">Our Nurses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
                {
                    loadNurse.map(nurses => <Nurse key={nurses.id} nurse={nurses}></Nurse>)
                }
            </div>
        </div>
    );
};

export default Nurses;