import { useState, useContext } from "react";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Logo } from "../assets";
import { Link, useNavigate } from "react-router";
import { CrowdFundingContext } from "../Context/CrowdFundingContext";

const Topbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { connectWallet, account, isConnected, disconnectWallet } =
    useContext(CrowdFundingContext);
  const truncateAddress = (address, startLength = 8, endLength = 5) => {
    if (!address) return "";
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
  };
  const handleDisconnect = () => {
    disconnectWallet();
    setProfileOpen(!profileOpen);
  };

  return (
    <div className="w-full relative ">
      <div className="w-[94%] md:w-[98%] mx-auto relative flex items-center justify-between">
        <div className="w-full flex items-center gap-x-3">
          {/* <h2 className=""></h2> */}
          <Link to="/" className="">
            <img
              src={Logo}
              alt=""
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-full hidden md:flex items-center justify-center">
          <input
            type="search"
            placeholder="search......"
            className="border border-[#dadada] text-white rounded-xl px-2 h-8 w-[60%] mx-auto"
          />
        </div>
        <div className="hidden w-full md:flex items-center gap-x-4 justify-end">
          {isConnected ? (
            <button
              className="linear capitalize rounded-2xl cursor-pointer px-4 py-[6px]"
              onClick={() => navigate("/create-campaign")}
            >
              Create campaign
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="linear px-5 py-1.5 cursor-pointer rounded-2xl text-lg bg-green-500"
            >
              Connect Wallet
            </button>
          )}
          {account && (
            <div
              className=" text-white p-1 cursor-pointer rounded-full border-2 border-[#55286FS]"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <FaRegUser className="size-4.5" />
            </div>
          )}
        </div>
        <div className="md:hidden border-2 border-[#55286F] text-white p-1 cursor-pointer rounded-xl flex items-center justify-center">
          <MdMenu className="h-6 w-7" />
        </div>
        {profileOpen && (
          <div className="absolute top-[50px] shadow right-0 bg-white w-56 py-3 p-2 rounded-xl">
            <p className="text-center text-lg pb-2">
              {truncateAddress(account)}
            </p>
            <button
              className="w-full bg-black py-1 rounded-xl cursor-pointer text-white"
              onClick={handleDisconnect}
            >
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
