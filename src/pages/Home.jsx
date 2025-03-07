import React from "react";
import { CampaignCard } from "../components";
import { Hero } from "../assets";
import { CampaignData } from "../components/DummyData";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-[4rem] pb-[2rem]">
      <div className="w-full bg-black  h-[70vh] md:h-[80vh]">
        <div className="w-[96%]  mx-auto flex items-center justify-between flex-col md:flex-row">
          <div className="w-full text-white">
            <h2 className="text-4xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text leading-14 text-transparent">
              FundChain <br /> The Future of Decentralized Crowdfunding
            </h2>
            <p className="my-6 md:text-lg text-base lg:text-xl">
              FundChain is a decentralized crowdfunding platform built on Web3,
              enabling creators, startups, and changemakers to raise funds
              transparently, securely, and without middlemen. Powered by
              blockchain.
            </p>
            <div className="flex items-center pt-5 gap-x-7">
              <button
                className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent bg-black border py-2 px-2 rounded-xl shadow md:text-lg capitalize border-white text-base cursor-pointer"
                onClick={() => navigate("/create-campaign")}
              >
                Start campaign
              </button>
              <button
                className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent bg-black border py-2 px-2 rounded-xl shadow md:text-lg capitalize border-white text-base cursor-pointer"
                onClick={() => navigate("/campaigns")}
              >
                Explore Projects
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <img src={Hero} alt="" className="w-[55%] h-[55%]" />
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] linear" />
      <div className="w-[96%] mx-auto mt-4">
        <h2 className="text-xl lg:text-2xl text-white">Popular Campaigns</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
          {CampaignData.map((item) => (
            <CampaignCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
