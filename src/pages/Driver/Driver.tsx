import { useNavigate } from "react-router-dom";

const Driver = () => {
  const navigate = useNavigate();

  // const submit = (imageUrl) => {
  //   if (imageUrl) {
  //     setIsActive(false);
  //   } else {
  //     setIsActive(true);
  //   }
  // };

  return (
    <div className="w-full flex flex-col justify-between overflow-y-auto p-7 h-[100dvh]">
      <div className="flex md:flex-row flex-col gap-3 justify-between">
        <button
          onClick={() => navigate("/")}
          className="bg-neutral-500 text-white font-bold whitespace-nowrap rounded-md text-xl p-3 mt-2 md:w-max w-full"
        >
          Ortga qaytish
        </button>

        <button
          onClick={() => navigate("/order")}
          className="bg-yellow-300 text-black font-bold rounded-md text-xl p-3 mt-2 w-full"
        >
          Navbatga turish
        </button>
      </div>
    </div>
  );
};

export default Driver;
