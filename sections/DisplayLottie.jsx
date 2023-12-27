import React, { useRef } from "react";
import Lottie from "lottie-react";

const GreetingLottie = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };
  const lottieRef = useRef();

  return (
    <div
      onClick={() => {
        lottieRef.current.setSpeed(0.3);
        setTimeout(() => {
          lottieRef.current.setSpeed(1);
        }, 2000);
      }}
      onMouseOver={() => {
        lottieRef.current.setSpeed(0.3);
      }}
      onMouseOut={() => {
        lottieRef.current.setSpeed(1);
      }}
      className="cursor-pointer"
    >
      <Lottie
        path={animationPath}
        options={defaultOptions}
        loop={true}
        autoplay={true}
        lottieRef={lottieRef}
      />
    </div>
  );
};

export default GreetingLottie;
