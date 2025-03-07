import { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar, Topbar } from "../components";

const Layout = () => {
  const [toggle, setToggle] = useState("expanded");

  const handleToggle = () => {
    if (toggle === "expanded") {
      setToggle("collapsed");
    } else if (toggle === "collapsed") {
      setToggle("hidden");
    } else {
      setToggle("expanded");
    }

    console.log(toggle);
  };

  return (
    <div className="w-full">
      {/* TOPBAR */}
      <div className="w-full bg-black shadow fixed top-0 left-0 z-50 flex items-center h-14 mb-[1px]">
        <Topbar handleToggle={handleToggle} />
      </div>

      {/* SIDEBAR CONTENTS */}
      <div className="w-full ">
        {toggle !== "hidden" && (
          <div
            className={`h-screen linear pt-16 shadow  fixed transition-all duration-300 ease-in-out
              ${
                toggle === "expanded"
                  ? "w-[15%] md:w-[15%] lg:w-[13%]"
                  : "w-[5%] md:w-[5%] lg:w-[5%]"
              }
              ${toggle === "collapsed" ? "md:w-[10%]" : ""}
              ${toggle === "hidden" ? "w-0 md:w-0 overflow-hidden" : ""}
            `}
          >
            <Sidebar toggle={toggle} />
          </div>
        )}

        {/* MAIN CONTENTS */}
        <div
          className={`ml-auto transition-all duration-300 ease-in-out
            ${
              toggle === "expanded"
                ? "w-[85%] md:w-[85%] lg:w-[87%]"
                : "w-[95%] md:w-[95%]"
            }
            ${toggle === "collapsed" ? "md:w-[90%]" : ""}
            ${toggle === "hidden" ? "w-full md:w-full" : ""}
          `}
        >
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
