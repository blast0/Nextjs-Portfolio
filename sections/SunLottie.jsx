import React, { useRef } from "react";
import Lottie from "lottie-react";

const SunLottie = ({ animationPath }) => {
  const lottieRef = useRef();
  return (
    <div
      onMouseOver={() => {
        lottieRef.current.setSpeed(0.3);
      }}
      onMouseOut={() => {
        lottieRef.current.setSpeed(1);
      }}
      className="cursor-pointer"
    >
      <Lottie
        style={{ height: "60px" }}
        path={animationPath}
        loop={true}
        autoplay={true}
        lottieRef={lottieRef}
      />
    </div>
  );
};

export default SunLottie;
