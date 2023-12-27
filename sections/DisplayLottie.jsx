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
        console.log(lottieRef);
        // lottieRef.current.pause();
        lottieRef.current.setSpeed(0.3);
        setTimeout(() => {
          lottieRef.current.play();
        }, 1000);
      }}
      onMouseOver={() => {
        lottieRef.current.setSpeed(0.3);
      }}
      onMouseOut={() => {
        lottieRef.current.setSpeed(1);
      }}
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
