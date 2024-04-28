"use client";
import { Puff } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default loading;
