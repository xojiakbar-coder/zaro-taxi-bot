import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[230px] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1F38] to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDiJEkwuIo7tAl-dTeJRiag6YEoVPxJPGxqubebcLSo8DUhv5JJ3gbvSTyzq9fLjpfbA&usqp=CAU')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 flex flex-col gap-5 pl-7 ">
        <p className="text-2xl mt-5 mb-5 font-semibold">Dashboard</p>
        <Link
          style={{ textShadow: "0.5px 0.5px 3px #fff" }}
          className="text-lg"
          to={"/admin/clients"}
        >
          Clients
        </Link>
        <Link className="text-lg hover:text-shadow-md" to={"/admin/drivers"}>
          Drivers
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
