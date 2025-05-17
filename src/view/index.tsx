import { Button } from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const GenericElement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-max-height">
      <div className="text-2xl font-semibold text-center">
        <span className="capitalize">{`${location.pathname.slice(1)} `}</span>
        page coming soon...
      </div>
      <Button
        variant="primary"
        className="mt-[30px] text-center"
        onClick={() => navigate("/")}
      >
        Asosiy sahifaga qaytish
      </Button>
    </div>
  );
};

export default GenericElement;
