import React from "react";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assests/Logo.svg";
import MobileLogo from "../../assests/Logo BCX-White-200x100.png";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center justify-center gap-4 mb-6 p-4">
          <h1 className="text-3xl font-extrabold mb-6 lg:text-4xl">
            Book an appointment now!
          </h1>
          <a
            href="tel:+917303335036"
            className="py-3 text-xl text-center font-semibold bg-green-600 text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90 flex "
          >
            <span>
              <PhoneCall className="pt-1" size={30} />
            </span>
            Call Us
          </a>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center items-center text-black lg:justify-start">
            {/* <h1 className="text-2xl font-bold">Bodyclinix</h1> */}
            <Link to={"/"} className="flex items-center justify-center">
              <img src={Logo} alt="" className="w-1/2 hidden md:block " />
              <img src={MobileLogo} alt="" className="w-1/2 md:hidden" />
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500 lg:-ml-44 lg:text-right mt-2 md:mt-4 lg:mt-0">
            <b>Address:</b> Delhi, India
          </p>
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
