import React, { useEffect, useState } from "react";

function ValidateOTP() {
  const [otpReady, setOtpReady] = useState(false);
  const [className, setClass] = useState("bg-slate-500 outline-slate-500");
  const [inputOTP, setInputOTP] = useState(null);
  const OTP = "1234";
  function checkOTP() {
    const otpfield = document.getElementsByClassName("otp-text-field");
    if (
      otpfield[0].value &&
      otpfield[1].value &&
      otpfield[2].value &&
      otpfield[3].value
    ) {
      setClass("bg-green-500 outline-green-500");
      let otp =
        otpfield[0].value +
        otpfield[1].value +
        otpfield[2].value +
        otpfield[3].value;
      setInputOTP(otp);
    } else {
      setClass("bg-slate-500 outline-slate-500");
    }
  }
  function validateOTP(otp, inputOTP) {
    if (otp === inputOTP) {
      return true;
    } else {
      setClass("bg-red-500 outline-red-500");
      document.getElementById("verifyBTN").innerText = "Validation Failed";
      return false;
    }
  }

  return (
    <div className=" h-full absolute w-full bg-[#3F72AF] text-center font-dm-sans ">
      <h1 className="text-7xl font-bold text-white mt-[5%]">Chai aur Code</h1>
      <div className="flex justify-center pt-[5%]">
        <div className="min-w-96 max-w-[500px] h-72  bg-white rounded-md p-2">
          <h1 className="text-black text-2xl m-1 font-semibold">
            Mobile Phone Verification
          </h1>
          <div className="flex justify-center">
            <p className="text-gray-400 text-md w-3/5 line-clamp-2 ">
              Enter the 4-digit verification code that was sent to your phone
              number.
            </p>
          </div>
          <form>
            <div className="flex justify-center gap-4 mt-4 p-1">
              <input
                id="otp_box_1"
                onFocus={(e) => {
                  e.target.value = "";
                }}
                onKeyUp={(e) => {
                  checkOTP();
                  document.getElementById("otp_box_2").focus();
                }}
                className="h-16 w-16 bg-gray-400 rounded-md text-center otp-text-field"
                maxLength={1}
              ></input>
              <input
                id="otp_box_2"
                onFocus={(e) => {
                  e.target.value = "";
                }}
                onKeyUp={(e) => {
                  checkOTP();
                  document.getElementById("otp_box_3").focus();
                }}
                className="h-16 w-16 bg-gray-400 rounded-md text-center otp-text-field"
                maxLength={1}
              ></input>
              <input
                id="otp_box_3"
                onFocus={(e) => {
                  e.target.value = "";
                }}
                onKeyUp={(e) => {
                  checkOTP();
                  document.getElementById("otp_box_4").focus();
                }}
                className="h-16 w-16 bg-gray-400 rounded-md text-center otp-text-field"
                maxLength={1}
              ></input>
              <input
                id="otp_box_4"
                onFocus={(e) => {
                  e.target.value = "";
                }}
                onKeyUp={(e) => {
                  checkOTP();
                  document.getElementById("verifyBTN").focus();
                }}
                className="h-16 w-16 bg-gray-400 rounded-md text-center otp-text-field"
                maxLength={1}
              ></input>
            </div>
            <button
              id="verifyBTN"
              type="button"
              onClick={() => {
                if (validateOTP(OTP, inputOTP)) {
                  //   alert("Auth Success");
                  window.location = "/course-list";
                } else {
                  setOtpReady(true);
                }
              }}
              className={`w-[305px] bg-slate-950 text-white p-2 rounded-md ${className}`}
            >
              Verifiy Account
            </button>
            <p className="text-gray-400">
              Didn’t receive code?{" "}
              <span className="text-slate-950 font-bold">Resend</span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ValidateOTP;
