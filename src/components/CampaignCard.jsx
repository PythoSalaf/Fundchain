import { Link } from "react-router";
import { Bus } from "../assets";
import Progressbar from "./Progressbar";

const CampaignCard = ({
  title,
  description,
  date,
  target,
  raised,
  avatar,
  id,
}) => {
  return (
    <Link
      className="w-[280px] md:w-[92%] mx-auto h-[305px] bg-white cursor-pointer shadow rounded-xl"
      to={`/campaign/${id}`}
    >
      <div className="bg-transparent w-full h-[40%] rounded-xl">
        <img src={avatar} alt="" className="h-full w-full rounded-xl" />
      </div>
      <div className="w-[94%] mx-auto py-1">
        <h2 className="font-semibold capitalize">{title}</h2>
        <p className="text-xs text-gray-500 py-1">{description}</p>
        <div className="flex items-center justify-between w-full">
          <div className="">
            <h3 className="text-base font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent ">
              Target
            </h3>
            <p className="text-base font-semibold">${target}</p>
          </div>
          <div className="">
            <h3 className="text-base font-semibold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent ">
              Time
            </h3>
            <p className="text-xs md:text-sm font-semibold">{date} days left</p>
          </div>
        </div>
        <div className="mt-2.5">
          <h5 className="text-sm font-semibold mb-1">Raised</h5>
          <Progressbar totalAmount={target} donatedAmount={raised} />
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
