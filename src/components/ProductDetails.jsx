import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";
import { useEffect, useState } from "react";
import DetailsPagesHeading from "./DetailsPageHeading";

const ProductDetails = () => { 
    const { id } = useParams();

    const data = useLoaderData();

    const [product, setProduct] = useState({});

    useEffect( () => {
        const singleData = data.find(product => product.product_id == id);
        setProduct(singleData)
    },[data, id])



    return (
        <div className="pb-[280px]">
            <DetailsPagesHeading title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} />  
            <Details id={id} product={product} />
        </div>
    );
};

export default ProductDetails;