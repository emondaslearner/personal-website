import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

//import image
import logo from "../../assets/logo.png";
import gif from "../../assets/e-loader-2.gif";

import { useNavigate } from "react-router-dom";

const Spainer = ({ path }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    ref.current.complete();
  }, []);
  return (
    <div className="fixed left-0 top-0 w-full h-full !z-40 bg-[#000000] flex flex-col items-center justify-center">
      <LoadingBar
        onLoaderFinished={() => navigate(`/${path}`)}
        color="#977500"
        ref={ref}
        loaderSpeed={2500}
      />
      <img src={logo} className="w-[120px] mb-[-70px] z-30" alt="" />
      <img src={gif} className="w-[300px] z-10" alt="" />
    </div>
  );
};

export default Spainer;
