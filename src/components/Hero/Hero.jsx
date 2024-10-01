import hero from "/assets/website/hero.png";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={hero}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[512px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 right-2 md:-right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm">⭐Projects</p>
              <h1 className="font-bold">
                80+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-20 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Building the Future with Cutting-Edge{" "}
              <span className="text-primary">Software Solutions</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              We develop high-quality websites and web applications that
              streamline business activities, offering effective web and mobile
              solutions for startups, small to medium businesses, agencies, and
              enterprises.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              <a href="/contact">Contact us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
