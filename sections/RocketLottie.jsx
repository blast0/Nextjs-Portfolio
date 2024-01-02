import React, { useRef } from "react";
import Lottie from "lottie-react";

const RocketLottie = ({ animationPath }) => {
  return (
    <div className="cursor-pointer">
      <Lottie
        style={{ height: "60px" }}
        path={animationPath}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default RocketLottie;
