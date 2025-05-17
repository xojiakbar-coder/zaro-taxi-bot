import React from "react";

interface IProps {
  fullScreen?: boolean;
}

const SpinnerLoader: React.FC<IProps> = ({ fullScreen = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        !fullScreen ? "h-max-height" : "h-full-screen"
      }`}
    >
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
