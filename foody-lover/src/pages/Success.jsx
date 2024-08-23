import React, { useEffect, useState } from "react";
import video from "../../public/images/shot.mp4";
import { ClockLoader } from "react-spinners";
const Success = () => {
  const [loader, setloader] = useState(true);
  console.log(loader);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center h-[90vh] justify-center">
      {loader ? (
        <ClockLoader color="black" />
      ) : (
        <h2 className="text-3xl font-semibold mb-4">Order Successful!</h2>
      )}
    </div>
  );
};

export default Success;
