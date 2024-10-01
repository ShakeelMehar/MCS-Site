import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "/assets/website/logo_white.png"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="text-center mb-6">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-10 mx-auto" />
          {/* Slogan */}
          <p className="text-sm mt-4">
            Your trusted partner for digital solutions
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mb-6">
          <a href="#" className="text-2xl hover:text-primary duration-300">
            <FaGithub />
          </a>
          <a href="#" className="text-2xl hover:text-primary duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-primary duration-300">
            <FaLinkedin />
          </a>
        </div>
        <div className="flex justify-center mb-6">
          <a
            href="/contact"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-violet-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
