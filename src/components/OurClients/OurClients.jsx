import Slider from "react-slick";

const ClientSlider = () => {
  const clients = [
    "/assets/brands/ABS.png",
    "/assets/brands/Kham.png",
    "/assets/brands/Glossy.png",
    "/assets/brands/Khawateen-o-hazraat.jpg",
    "/assets/brands/OtisFire.png",
    "/assets/brands/Foodyx.png",
  ];
  const settings = {
    infinite: true,
    speed: 5000, // Slow scrolling speed
    slidesToShow: 5, // Number of visible slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear", // Linear easing for smooth sliding
    pauseOnHover: false, // Do not pause on hover
    arrows: false, // No navigation arrows
  };

  return (
    <div className="container mx-auto py-12">
      {/* <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2> */}
      <h1 className="text-3xl font-semibold text-center my-6 sm:text-3xl text-violet-950 dark:text-primary">
        Our Clients
      </h1>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={client}
              alt={`Client ${index + 1}`}
              className="w-32 h-32 md:w-48 md:h-28 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
