import { Outlet } from "react-router";
import { Footer, Topbar } from "../components";

const Layout = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-black shadow fixed top-0 left-0 z-50 flex items-center h-14 mb-[1px]">
        <Topbar />
      </div>

      <div className="w-full">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
