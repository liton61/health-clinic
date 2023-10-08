import { useLoaderData } from "react-router-dom";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
    const loaderDoctor = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-4xl my-10 font-bold border-b-4 border-indigo-500 w-72 mx-auto">Our Doctors</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
                {
                    loaderDoctor.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;