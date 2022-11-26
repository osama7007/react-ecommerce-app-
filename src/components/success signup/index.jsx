import Lottie from "react-lottie";
import success from "../../assets/lottieFiles/96295-success-popup.json";

import React from 'react'

const Success = () => {
    // lottie files properties
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="m-auto text-center">
    <Lottie options={defaultOptions} height={400} width={600} /> 
    <h4 className="mt-5">Signed up successfully</h4>
  </div>
  )
}

export default Success