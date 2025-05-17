import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const Admin = () => {
  return (
    <div>
      <div className="flex h-[100vh] justify-between relative bg-[#121423]">
        <Sidebar />
        <div className="w-[85vw] h-full flex justify-center items-end relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
