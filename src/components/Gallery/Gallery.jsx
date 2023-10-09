import img1 from '../../assets/bed (1).jpg';
import img2 from '../../assets/bed (2).jpg';
import img3 from '../../assets/bed (3).jpg';
import img4 from '../../assets/bed (4).jpg';
import img5 from '../../assets/bed (5).jpg';
import img6 from '../../assets/bed (6).jpg';
import img7 from '../../assets/bed (7).jpg';
import img8 from '../../assets/bed (8).jpg';
import img9 from '../../assets/bed (9).jpg';
import img10 from '../../assets/bed (10).jpg';
import img11 from '../../assets/bed (11).jpg';
import img12 from '../../assets/bed (12).jpg';
const Gallery = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-10 border-b-4 border-indigo-500 w-72 mx-auto mt-20">Photos Gallery</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img1} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img2} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img3} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img4} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img5} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img6} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img7} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img8} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img9} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img10} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img11} alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-52 w-full rounded-lg" src={img12} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;