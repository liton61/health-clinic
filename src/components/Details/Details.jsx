/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Details = () => {
    const [detail, setDetail] = useState();
    const { id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findDetail = details.find(detail => detail.id == id)
        setDetail(findDetail)
    }, [id, details])
    return (
        <div>
            <ServiceDetails detail={detail}></ServiceDetails>
        </div>
    );
};

export default Details;