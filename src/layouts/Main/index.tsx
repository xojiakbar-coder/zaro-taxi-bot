import BottomMenu from "./BottomMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative h-full-screen">
      <div className="w-full h-max-height overflow-y-auto">
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
};

export default Layout;
