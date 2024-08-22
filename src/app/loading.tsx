import React from "react";
import { LoadingIcon } from "../../public/icon-static/loading-icon";

const Loading = () => {
  return (
    <div className="fixed z-[1000] inset-0 bg-background/10 backdrop-blur flex items-center justify-center">
      <LoadingIcon className="animate-spin" />
    </div>
  );
};

export default Loading;
