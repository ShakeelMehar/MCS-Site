import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container my-12 sm:mt-24 px-4">
      <h1 className="text-3xl font-semibold text-center my-8 sm:text-3xl text-violet-950 dark:text-primary">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Canada Office */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <FaMapMarkerAlt className="text-4xl text-primary mb-2" />
            <h2 className="text-xl font-semibold">Canada Office</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Location */}
            <div className="flex flex-col text-center">
              <p className="font-semibold">Location:</p>
              <p>43 Thorncliffe, Toronto, Ontario</p>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col text-center">
              <p className="font-semibold">Contact:</p>
              {/* <p>
                <FaPhoneAlt className="inline-block mr-1" />
                +1 987-654-3210
              </p> */}
              <p>
                <FaEnvelope className="inline-block mr-1" />
                info@metacloudstudio.com
              </p>
            </div>
          </div>
        </div>

        {/* Pakistan Office */}
        <div className="flex flex-col items-center border-l-2">
          <div className="flex flex-col items-center mb-4">
            <FaMapMarkerAlt className="text-4xl text-primary mb-2" />
            <h2 className="text-xl font-semibold">Pakistan Office</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Location */}
            <div className="flex flex-col text-center">
              <p className="font-semibold">Location:</p>
              <p>Civic Center, Model Town, Lahore</p>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col text-center">
              <p className="font-semibold">Contact:</p>
              {/* <p>
                <FaPhoneAlt className="inline-block mr-1" />
                +92 123-456-7890
              </p> */}
              <p>
                <FaEnvelope className="inline-block mr-1" />
                info@metacloudstudio.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
