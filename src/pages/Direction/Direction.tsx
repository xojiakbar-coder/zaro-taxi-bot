import { useNavigate } from "react-router-dom";

const Direction = () => {
  const arr = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  return (
    <div className="w-[95%] m-auto">
      <h2 className="text-2xl font-semibold text-center mt-3 mb-5">
        Yo'nalishni tanlang
      </h2>
      {arr?.map(() => (
        <div
          onClick={() => navigate("/driver")}
          className="flex items-center border-b py-3"
        >
          <div className="flex items-center gap-2 text-xl font-sans font-semibold">
            <p className="pb-1">Jizzax</p>
            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="w-0 h-1 bg-white animate-width-full"></div>
          </div>
          <div className="flex items-center gap-2 text-xl font-sans font-semibold">
            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
            <p className="pb-1">Toshkent</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Direction;
