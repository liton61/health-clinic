import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='flex bg-gray-100 p-3'>
            <button className='bg-red-600 px-5 py-2 text-white font-semibold'>Latest</button>
            <Marquee className='font-semibold'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;