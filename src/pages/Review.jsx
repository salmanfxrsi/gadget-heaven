import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useEffect } from "react";

const Review = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Gadget Heaven - Review";
  }, []);

  return (
    <div className="lg:container mx-auto w-11/12 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-[100px]">
        {data.map((review_info, index) => (
          <ReviewCard key={index} review_info={review_info} />
        ))}
      </div>
    </div>
  );
};

export default Review;
