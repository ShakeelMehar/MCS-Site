import { FaCoffee } from "react-icons/fa";
import { AiOutlineSliders } from "react-icons/ai";
import { BsLayoutWtf } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { SiVitest } from "react-icons/si";
import { HiMiniRocketLaunch } from "react-icons/hi2";

const WorkProcess = () => {
  return (
    <div className="container my-12 sm:mt-28">
      {/* <h1 className="text-center text-2xl mb-5 font-bold">Our Work Process</h1> */}
      <h1 className="text-3xl font-semibold text-center my-[3.2rem] sm:text-3xl text-violet-950 dark:text-primary">
        Our Work Process
      </h1>
      <div className="py-6 md:px-24 flex flex-wrap items-center justify-center gap-40">
        {[
          {
            icon: <FaCoffee className="text-4xl text-primary" />,
            label: "Discussion",
          },
          {
            icon: <AiOutlineSliders className="text-4xl text-primary" />,
            label: "Plan",
          },
          {
            icon: <BsLayoutWtf className="text-4xl text-primary" />,
            label: "Design",
          },
          {
            icon: <FaCode className="text-4xl text-primary" />,
            label: "Develop",
          },
          {
            icon: <SiVitest className="text-4xl text-primary" />,
            label: "Testing",
          },
          {
            icon: <HiMiniRocketLaunch className="text-4xl text-primary" />,
            label: "Launch",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {item.icon}
            <span className="text-xl mt-3 font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
