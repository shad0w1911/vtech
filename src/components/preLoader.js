import React, { useEffect } from "react";
import "./preLoader.css";
import { preLoaderAnim } from "../animations";
import ReactLoading from "react-loading";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="text-container">
        <ReactLoading
          type={"cylon"}
          color={"#bb0000"}
          height={"20%"}
          width={"200px"}
        />
      </div>
    </div>
  );
};

export default PreLoader;
