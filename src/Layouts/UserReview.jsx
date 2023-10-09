import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UserReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="px-4">
      <h2 className="text-3xl my-5 font-semibold">
        See What People Say About Us
      </h2>

      <Slider {...settings}>
        {reviews &&
          reviews?.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 flex flex-col items-center p-5 justify-center"
            >
              <img
                src={review.image}
                className="w-20 h-20 mx-auto rounded-full"
                alt={review.user}
              />
              <div>
                <h3 className="text-2xl text-center text-white font-semibold my-3">
                  {review.user}
                </h3>
                <p className="text-xl text-white text-center">
                  {review.review}
                </p>
                <div className="text-base text-center max-w-sm">
                  Rating: {review.rating}
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default UserReview;
