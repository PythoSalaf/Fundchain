import { Logo } from "../assets";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" w-full py-4 text-white">
      <div className="w-[96%] mx-auto shadow-2xl flex items-start flex-col md:flex-row justify-between ">
        <div className="">
          <div className="flex items-center gap-x-3">
            <img src={Logo} alt="logo" className="w-12 h-12" />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent bg-black s">
              FundChain
            </h2>
          </div>
          <p className="">A decentralized crowdfunding platform</p>
          <div className="flex items-center gap-x-8 mt-4 text-xl">
            <FaXTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="my-5 md:my-0">
          <h2 className="text-lg">Company</h2>
          <ul className="pt-1">
            <li className="text-sm">Blog</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg">Resources</h2>
          <ul className="pt-1">
            <li className="text-sm">Blog</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr className="w-[96%] mx-auto py-2 mt-6" />
      <div className="flex items-center justify-between  w-[96%] mx-auto flex-col md:flex-row">
        <p className="text-base md:text-lg">Fund Chain, 2025</p>
        <p className="text-sm md:text-lg pt-2 md:pt-0">
          Copyright © 2025 Fundchain. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
