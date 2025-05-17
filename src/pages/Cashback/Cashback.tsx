import { useNavigate } from "react-router-dom";

const Cashback = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[95%] m-auto overflow-y-auto flex flex-col gap-3 py-4 h-[100dvh]">
      <div className="w-full m-auto flex flex-col gap-2 mt-3"></div>
      <button
        onClick={() => navigate("/")}
        className="bg-neutral-500 text-white font-bold whitespace-nowrap rounded-md text-xl p-3 mt-auto w-full"
      >
        Ortga qaytish
      </button>
    </div>
  );
};

export default Cashback;
