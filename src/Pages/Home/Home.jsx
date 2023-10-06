import Navbar from "../../Layouts/Navbar";
import SimpleSlider from "../../Layouts/Slider";

const Home = () => {
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <SimpleSlider></SimpleSlider>
      <h1>This Is Home</h1>
    </div>
  );
};

export default Home;
