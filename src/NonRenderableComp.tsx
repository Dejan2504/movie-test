import React, { useEffect } from "react";
import useAuthApi from "../redux/api/useAuthApi";

const NonRenderableComp = () => {
  const { authenticate } = useAuthApi();

  useEffect(() => {
    authenticate();
  }, []);

  return <></>;
};

export default NonRenderableComp;
