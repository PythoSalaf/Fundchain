import { CampaignCard } from "../components";
import { CampaignData } from "../components/DummyData";

const Campaigns = () => {
  return (
    <div className="w-full pt-[4rem] pb-[1rem] ">
      <div className="w-[96%] mx-auto">
        <h2 className="text-xl md:text-2xl text-white">Your Campaigns(8)</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-4">
          {CampaignData.map((item) => (
            <CampaignCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
