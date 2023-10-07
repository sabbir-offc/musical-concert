import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcGoogle } from "react-icons/fc";
import {
  BiLogoAirbnb,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

const Sponsor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="text-center mt-10 px-4 lg:px-0">
      <h2 className="text-2xl text-left mb-4 md:text-4xl font-bold">
        Event Sponsors
      </h2>
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <Slider {...settings}>
          <div className="mx-auto">
            <h2 className="text-2xl flex items-center gap-2 mx-auto">
              <FcGoogle></FcGoogle> Google
            </h2>
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl flex items-center gap-2 mx-auto">
              <BiLogoFacebook></BiLogoFacebook> Facebook
            </h2>
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl flex items-center gap-2 mx-auto">
              <BiLogoInstagram></BiLogoInstagram> Instagram
            </h2>
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl flex items-center gap-2 mx-auto">
              <BiLogoAirbnb></BiLogoAirbnb> Airbnb
            </h2>
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl flex items-center gap-2 mx-auto">
              <BiLogoTwitter></BiLogoTwitter> Twitter
            </h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sponsor;
