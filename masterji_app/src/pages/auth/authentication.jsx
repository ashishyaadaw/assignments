import React from "react";
import { Link, Outlet } from "react-router-dom";

function Authentication() {
  return (
    <div className=" h-full w-full bg-[#3F72AF] text-center">
      <h1 className="text-gray-100 font-bold text-7xl p-10 ">Chai aur Code</h1>
      <Link to={"/validateOTP"} className="bg-blue-800 rounded-md p-2 m-4">
        Try OTP Validation
      </Link>
      <hr className="h-0 mt-4"></hr>

      <Outlet />
    </div>
  );
}

export default Authentication;
