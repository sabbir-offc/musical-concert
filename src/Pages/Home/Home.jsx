import Navbar from "../../Layouts/Navbar";
import Services from "../../Layouts/Services";
import SimpleSlider from "../../Layouts/Slider";

const Home = () => {
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <SimpleSlider></SimpleSlider>
      <Services></Services>
    </div>
  );
};

export default Home;
