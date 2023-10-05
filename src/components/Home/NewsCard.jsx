/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div>
            <div className="relative flex mx-5 flex-col mb-10">
                <h4 className="text-2xl mb-3 font-bold">
                    {title}
                </h4>
                <div>
                    <img
                        src={image_url}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="mt-5 text-justify">
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250)}
                                <Link to={`/news/${_id}`} className="text-blue-400"> read more...</Link> </p>
                            :
                            <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;