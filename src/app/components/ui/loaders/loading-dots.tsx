import React, { useEffect } from "react";

interface props {
  backgroundColor?: string;
}

//simple animation with dots
const LoadingDots: React.FC<props> = ({ backgroundColor }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <span
        className={`w-2 h-2 ${
          backgroundColor ? backgroundColor : "bg-primary"
        } rounded-full animate-waveUpDown`}
      ></span>
      <span
        className={`w-2 h-2 ${
          backgroundColor ? backgroundColor : "bg-primary"
        } rounded-full animate-waveUpDown animate-delay-100`}
      ></span>
      <span
        className={`w-2 h-2 ${
          backgroundColor ? backgroundColor : "bg-primary"
        } rounded-full animate-waveUpDown animate-delay-200`}
      ></span>
      <span
        className={`w-2 h-2 ${
          backgroundColor ? backgroundColor : "bg-primary"
        } rounded-full animate-waveUpDown animate-delay-300`}
      ></span>
    </div>
  );
};

export default LoadingDots;
