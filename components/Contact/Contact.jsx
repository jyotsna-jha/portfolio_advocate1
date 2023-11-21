// components/Contact/ContactCard.js
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div id="contact" className="py-8 lg:py-12 font-poppins">
      <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mt-20 mb-10 relative inline-block">
        Get In Touch
        <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-red-400 transform -translate-x-1/2"></span>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-2">
              <i className="text-3xl text-red-400">
                <MdEmail />
              </i>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">Email</h2>
            <p className="text-gray-600 mb-2">advbalram365@gmail.com</p>
            <p className="text-gray-600 mb-4">Response time: 72 hours</p>
            <Link href="advbalram365@gmail.com" className="text-red-400 hover:underline">
              Send Email <span>-&gt;</span>
            </Link>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-2">
              <i className="text-3xl text-red-400">
                <MdPhone />
              </i>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Phone Number
            </h2>
            <p className="text-gray-600 mb-2">+977 9852090365</p>
            <p className="text-gray-600 mb-4">Response time: 9am to 9pm</p>
            <Link href="/" className="text-red-400 hover:underline">
              Call Now <span>-&gt;</span>
            </Link>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-2">
              <i className="text-3xl text-red-400">
                <MdLocationOn />
              </i>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">Address</h2>
            <p className="text-gray-600 mb-2">
              Chandragiri-15 
            </p>
            <p className="text-gray-600 mb-4">Kathmandu, Nepal</p>
            <Link href="/" className="text-red-400 hover:underline">
              Visit Us <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
