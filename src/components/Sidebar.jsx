import { FaRegUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ toggle }) => {
  //
  const active = "relative flex items-center  gap-x-3 mb-5 ";
  const inactive = "relative flex items-center  gap-x-3 mb-5 ";
  return (
    <div className="pt-5 pl-2">
      {/* <div className="mb-5"></div> */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        {({ isActive }) => (
          <>
            <IoMdHome className="size-6.5 lg:size-7.5" />
            {toggle === "expanded" && (
              <span className="text-lg font-semibold ">Home</span>
            )}

            {isActive && (
              <span className="absolute left-[-7px] top-[1px] h-[30px] w-[3px] rounded-2xl bg-white"></span>
            )}
          </>
        )}
      </NavLink>
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        {({ isActive }) => (
          <>
            <IoMdHome className="size-6.5 lg:size-7.5" />
            {toggle === "expanded" && (
              <span className="text-lg font-semibold ">Home</span>
            )}

            {isActive && (
              <span className="absolute left-[-7px] top-[1px] h-[30px] w-[3px] rounded-2xl bg-white"></span>
            )}
          </>
        )}
      </NavLink> */}
      <NavLink
        to="/campaigns"
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        {({ isActive }) => (
          <>
            <IoMdHome className="size-6.5 lg:size-7.5" />
            {toggle === "expanded" && (
              <span className="text-lg font-semibold ">Campaigns</span>
            )}

            {isActive && (
              <span className="absolute left-[-7px] top-[1px] h-[30px] w-[3px] rounded-2xl bg-white"></span>
            )}
          </>
        )}
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        {({ isActive }) => (
          <>
            <FaRegUser className="size-6 lg:size-7" />
            {toggle === "expanded" && (
              <span className="text-lg font-semibold ">Profile</span>
            )}

            {isActive && (
              <span className="absolute left-[-7px] top-[1px] h-[30px] w-[3px] rounded-2xl bg-white"></span>
            )}
          </>
        )}
      </NavLink>

      <NavLink to="/" className="flex items-center gap-x-4 mt-16 ">
        <HiOutlineLogout className="md:size-6.5 lg:size-7" />
        {toggle === "expanded" && (
          <span className="text-lg font-semibold ">Logout</span>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
