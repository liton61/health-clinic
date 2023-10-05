import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNave = () => {
    return (
        <div className='mx-3'>
            <div>
                <h1 className='text-2xl font-bold ml-3'>Login with</h1>
                <button className="border border-blue-400 py-2 font-semibold mt-3 rounded text-blue-400 w-full"><i className="fa-brands fa-google mr-3"></i>Google</button><br />
                <button className="border border-black py-2 font-semibold mt-3 rounded w-full"><i className="fa-brands fa-github mr-3"></i>Github</button>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl font-bold ml-3'>Find Us On</h1>
                <button className="border-t border-l border-r rounded-t-md py-2 font-semibold mt-5 w-full"><i className="fa-brands fa-facebook text-blue-600 mr-3"></i>Facebook</button><br />
                <button className="border-t border-l border-r py-2 font-semibold w-full"><i className="fa-brands fa-twitter text-blue-500 mr-3"></i>Facebook</button><br />
                <button className="border rounded-b-md py-2 font-semibold w-full"><i className="fa-brands fa-instagram text-red-400 mr-3"></i>Facebook</button><br />
            </div>
            <div className='mt-7 bg-gray-100'>
                <h1 className='text-2xl font-bold mb-5 ml-3'>Q-Zone</h1>
                <img className='p-3' src={qZone1} alt="" />
                <img className='p-3' src={qZone2} alt="" />
                <img className='p-3' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNave;