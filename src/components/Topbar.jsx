import { useState, useContext, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Logo } from "../assets";
import { useNavigate } from "react-router";
import { CrowdFundingContext } from "../Context/CrowdFundingContext";

const Topbar = () => {
  const navigate = useNavigate();
  const { connectWallet, account, isConnected } =
    useContext(CrowdFundingContext);

  return (
    <div className="w-full ">
      <div className="w-[94%] md:w-[98%] mx-auto flex items-center justify-between">
        <div className="w-full flex items-center gap-x-3">
          {/* <h2 className=""></h2> */}
          <div className="">
            <img
              src={Logo}
              alt=""
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </div>
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
          <div className=" text-white p-1 cursor-pointer rounded-full border-2 border-[#55286FS]">
            <FaRegUser className="size-4.5" />
          </div>
        </div>
        <div className="md:hidden border-2 border-[#55286F] text-white p-1 cursor-pointer rounded-xl flex items-center justify-center">
          <MdMenu className="h-6 w-7" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
