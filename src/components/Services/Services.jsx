import { RiCodeView } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineWebStories } from "react-icons/md";
import { FaAndroid } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { MdImportantDevices } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { MdRebaseEdit } from "react-icons/md";

const skillsData = [
  {
    name: "Web Designing",
    icon: <MdWeb className="text-4xl text-primary" />,
    link: "#",
    description:
      "From start-ups to big brands, from small scale to large scale, we have provided the most lucrative Web Design solutions for our clients to shows off their brand identity in a meaningful way.",
    aosDelay: "300",
  },
  {
    name: "Web Development",
    icon: <RiCodeView className="text-4xl text-primary" />,
    link: "#",
    description:
      "We are expert in creating Attractive and Functional websites, CMS portals, Blogs, Web applications, and Products built on state of art technologies and frameworks. We listen to your goals and build your dream.",
    aosDelay: "0",
  },
  {
    name: "E-commerce Website",
    icon: <FaShoppingBag className="text-4xl text-primary" />,
    link: "#",
    description:
      "We are committed to providing a way forward that will give your online users incredible online shopping experience. We cover all of your e-commerce needs i.e. Shopping cart, Payment methods & Third party integration.",
    aosDelay: "500",
  },
  {
    name: "UX & UI design",
    icon: <MdOutlineWebStories className="text-4xl text-primary" />,
    link: "#",
    description:
      "Let us take you to new dimensions of your business with the world’s most widely used smartphone platform. Get an android app designed from our fully equipped android app developers.",
    aosDelay: "700",
  },
  {
    name: "Android App",
    icon: <FaAndroid className="text-4xl text-primary" />,
    link: "#",
    description:
      "We provide the best user experience (UX) by enhancing customer satisfaction and ease of use through a better interface, striking graphics and attractive design. We make sure your customer will never go to your competitor’s website again.",
    aosDelay: "700",
  },
  {
    name: "CMS Portals",
    icon: <MdImportantDevices className="text-4xl text-primary" />,
    link: "#",
    description:
      "Content is the king which connects your customers with our product or service. Power your business with content management system to keep an eye on ever evolving content. We provide open source development solutions for your website where you can maintain or change the content whenever you want.",
    aosDelay: "700",
  },
  {
    name: "SEO Services",
    icon: <AiOutlineStock className="text-4xl text-primary" />,
    link: "#",
    description:
      "Want to get ranked high in search results on Google, Bing and Yahoo etc? We believe SEO is an investment to success and our SEO team brings forth all white hat SEO technique to make your business do the talking in search engines results.",
    aosDelay: "700",
  },
  {
    name: "Customer Care Services",
    icon: <MdRebaseEdit className="text-4xl text-primary" />,
    link: "#",
    description:
      "Whether looking to increase revenues, grow customer loyalty or identify performance opportunities through your contact centre, you can utilize our flexible and innovative Managed Call Center solutions and expertise.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              With over 80 projects, we empower businesses to realize their
              vision and enhance their value, demonstrating our expertise in WEB
              2.0.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
