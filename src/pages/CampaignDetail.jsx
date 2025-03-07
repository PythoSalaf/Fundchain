import { Bus, Profile } from "../assets";
import { CampaignData } from "../components/DummyData";
import { CampaignCard, Progressbar } from "../components";
import { useParams } from "react-router";

const CampaignDetail = () => {
  const { id } = useParams();
  const campaign = CampaignData.find((e) => e.id === parseInt(id));
  return (
    <div className="pt-[4.5rem] pb-3 text-white w-full">
      <div className="w-[94%] md:w-[96%] mx-auto">
        <div className="flex items-start justify-between flex-col gap-5 md:flex-row">
          <div className="w-full md:w-[65%] h-36 md:h-52 lg:h-64">
            <img
              src={campaign.avatar}
              alt=""
              className="w-full h-full rounded-t-lg"
            />
            <Progressbar
              totalAmount={campaign.target}
              donatedAmount={campaign.raised}
            />
          </div>
          <div className="w-full md:w-[33%] bg-white  rounded-lg ">
            <div className="w-[95%] mx-auto py-3.5 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div className="bg-black flex items-center justify-center py-3.5 flex-col rounded-xl shadow">
                <div className="linear rounded-full h-8 w-8 md:w-10 md:h-10 flex items-center justify-center">
                  <h3 className="text-2xl ">6</h3>
                </div>
                <p className="mt-3">Days left</p>
              </div>
              <div className="bg-black flex items-center justify-center py-3.5 flex-col rounded-xl shadow">
                <div className="linear rounded-full h-8 w-8 md:w-10 md:h-10 flex items-center justify-center">
                  <h3 className="text-2xl ">6</h3>
                </div>
                <p className="mt-3">Days left</p>
              </div>
              <div className="bg-black flex items-center justify-center py-3.5 flex-col rounded-xl shadow">
                <div className="linear rounded-full h-8 w-8 md:w-10 md:h-10 flex items-center justify-center">
                  <h3 className="text-2xl ">6</h3>
                </div>
                <p className="mt-3">Days left</p>
              </div>
              <div className="bg-black flex items-center justify-center py-3.5 flex-col rounded-xl shadow">
                <div className="linear rounded-full h-8 w-8 md:w-10 md:h-10 flex items-center justify-center">
                  <h3 className="text-2xl ">6</h3>
                </div>
                <p className="mt-3">Days left</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 flex items-start justify-between flex-col md:flex-row">
          <div className="w-full md:w-[65%] ">
            <div className="w-[94%] mx-auto">
              <h2 className="text-lg md:text-xl uppercase">Creator</h2>
              <div className=" mt-4 flex items-center gap-x-3">
                <div className="bg-black shadow-2xl rounded-full h-14 w-14">
                  <img
                    src={Profile}
                    alt="pro-icon"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="">
                  <h3 className="">0xca5A38ed767868689798976554455Ertg</h3>
                  <p className="">M Campaign</p>
                </div>
              </div>
              <div className="my-7">
                <h3 className="uppercase text-lg md:text-xl ">Story</h3>
                <p className="mt-1.5">{campaign.description}</p>
              </div>

              <div className="">
                <h3 className="uppercase text-lg md:text-xl ">Donators</h3>
                <ol className="mt-1.5">
                  <li>0xca5A38ed767868689798976554455Ertg</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[34%] ">
            <h2 className="uppercase text-lg md:text-xl ">Fund</h2>
            <div className="w-full mt-5 bg-white rounded-xl">
              <div className="w-[95%] mx-auto py-1">
                <h3 className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text leading-14 text-transparent text-center text-lg md:text-xl font-semibold capitalize">
                  Pledge without reward
                </h3>
                <form className="w-[85%] mx-auto">
                  <input
                    type="number"
                    placeholder="Fund amount"
                    className="bg-black text-white w-full h-9 px-2 rounded-xl"
                  />
                  <div className="my-4 py-3 w-full bg-black rounded-xl">
                    <div className="w-[90%] mx-auto">
                      <h2 className="text-lg">
                        Back it because you believe in it
                      </h2>
                      <p className="text-sm mt-1.5">
                        Support the project for no reward, just because it is
                        special to you{" "}
                      </p>
                    </div>
                  </div>
                  <button className="mt-2 mb-4 py-1.5 cursor-pointer text-black w-full linear rounded-xl text-lg capitalize font-semibold">
                    {" "}
                    fund campaign
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="uppercase text-lg md:text-xl ">Similar Campaign</h3>
          <div className="mt-7 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {CampaignData.map((item) => (
              <CampaignCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
