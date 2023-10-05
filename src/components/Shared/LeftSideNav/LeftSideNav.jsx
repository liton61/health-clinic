/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold ml-3'>All category</h1>
            {
                categories.map(category => <Link className='block mt-5 text-xl font-semibold ml-10 text-[#9F9F9F]' key={category.id}>{category.name}</Link>)
            }
            <div className='mx-5 mt-7'>
                <img src={img1} alt="" />
                <p className='mt-3 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className='mx-5 mt-7'>
                <img src={img2} alt="" />
                <p className='mt-3 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className='mx-5 mt-7'>
                <img src={img3} alt="" />
                <p className='mt-3 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
        </div>
    );
};

export default LeftSideNav;