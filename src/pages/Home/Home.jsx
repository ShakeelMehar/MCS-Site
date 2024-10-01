import Hero from "../../components/Hero/Hero";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Team from "../../components/Team/Team";
import Services from "../../components/Services/Services";
import ClientSlider from "../../components/OurClients/OurClients";
// import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WorkProcess />
      <ClientSlider />
      <Team />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
