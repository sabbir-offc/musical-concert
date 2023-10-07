import { useLoaderData } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Services from "../../Layouts/Services";
import SimpleSlider from "../../Layouts/Slider";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="py-5">
      <Navbar></Navbar>
      <SimpleSlider></SimpleSlider>
      <Services services={services}></Services>
    </div>
  );
};

export default Home;
