import { Wallet } from "../assets";

const HowItWork = ({ icon, title, description }) => {
  return (
    <div className="border border-white w-[85%] mx-auto md:w-full py-4 h-[260px] md:h-[300px] rounded-xl">
      <div className="w-[90%] mx-auto">
        <img src={icon} alt={`${title}`} className="w-[70px] md:w-[90px]" />
        <div className="mt-5 text-white">
          <h3 className="text-lg lg:text-xl font-semibold uppercase">
            {title}
          </h3>
          <p className="pt-3.5 text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
