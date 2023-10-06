import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="cursor-pointer hero bg-arijit h-[70vh]">
          <div className="hero-content flex flex-col bg-gray-700 bg-opacity-80 h-full">
            <img
              src="../../public/assets/artist_image/arijitP.jpeg"
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <h3 className="text-2xl text-white font-semibold">
              {moment().add(2, "days").calendar()}
            </h3>
            <h1 className="text-3xl font-bold text-white">Arijit Singh</h1>
          </div>
        </div>
        <div className="cursor-pointer hero bg-atif h-[70vh]">
          <div className="hero-content flex flex-col bg-gray-700 bg-opacity-80 h-full">
            <img
              src="../../public/assets/artist_image/atifp.jpg"
              className="w-20 h-20 rounded-full"
              alt=""
            />
            <h3 className="text-2xl text-white font-semibold">
              {moment().add(4, "days").calendar()}
            </h3>
            <h1 className="text-3xl font-bold text-white">Atif Aslam</h1>
          </div>
        </div>
        <div className="cursor-pointer hero bg-ArRahman h-[70vh]">
          <div className="hero-content flex flex-col bg-gray-700 bg-opacity-80 h-full">
            <img
              src="../../public/assets/artist_image/ArRahmanP.jpg"
              className="w-20 h-20 rounded-full"
              alt=""
            />
            <h3 className="text-2xl text-white font-semibold">
              {moment().add(3, "days").calendar()}
            </h3>
            <h1 className="text-3xl font-bold text-white">AR Rahman</h1>
          </div>
        </div>
        <div className="cursor-pointer hero bg-armaan h-[70vh]">
          <div className="hero-content flex flex-col bg-gray-700 bg-opacity-80 h-full">
            <img
              src="../../public/assets/artist_image/armaanMalikP.jpg"
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <h3 className="text-2xl text-white font-semibold">
              {moment().add(1, "days").calendar()}
            </h3>
            <h1 className="text-3xl font-bold text-white">Armaan Malik</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MyCarousel;
