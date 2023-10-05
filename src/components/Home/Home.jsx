import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNave from '../Shared/RightSideNav/RightSideNave';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2 border'>
                    {
                        news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
                    }
                </div>
                <div className='border'>
                    <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default Home;