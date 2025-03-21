import { useContext } from "react";
import { CampaignCard, FAQ, HowItWork } from "../components";
import { Hero } from "../assets";
import { CampaignData, HowItWorkData } from "../components/DummyData";
import { useNavigate } from "react-router";
import { CrowdFundingContext } from "../Context/CrowdFundingContext";
const Home = () => {
  const navigate = useNavigate();
  const { campaigns } = useContext(CrowdFundingContext);
  console.log("this is Campaign Data", campaigns);

  return (
    <div className="w-full pt-[4rem] pb-[2rem]">
      <div className="w-full bg-black  h-full md:h-[80vh]">
        <div className="w-[96%]  mx-auto flex items-center gap-y-9 justify-between flex-col md:flex-row">
          <div className="w-full text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text leading-9 lg:leading-14 text-transparent">
              FundChain <br /> The Future of Decentralized Crowdfunding
            </h2>
            <p className="my-6 md:text-lg text-base lg:text-xl">
              FundChain is a decentralized crowdfunding platform built on Web3,
              enabling creators, startups, and changemakers to raise funds
              transparently, securely, and without middlemen. Powered by
              blockchain.
            </p>
            <div className="flex items-center justify-center md:justify-normal pt-5 gap-x-7">
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
          <div className="w-full flex items-center justify-center  md:pt-0 md:justify-end">
            <img
              src={Hero}
              alt=""
              className="w-[60%] h-[60%] md:w-[65%] md:h-[65%]"
            />
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] linear" />
      <section className="w-[96%] mx-auto my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-white">
          Available Campaigns
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
          {CampaignData.map((item) => (
            <CampaignCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="w-[96%] mx-auto mt-[4rem]">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl text-center md:text-left ">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-6">
          {HowItWorkData.map((item) => (
            <HowItWork key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="text-white w-[96%] mx-auto my-[4rem]">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
