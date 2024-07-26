import React, { useEffect, useState } from "react";

function Screen() {
  const [bundle, setbundle] = useState([
    {
      bundle_id: "1",
      type: "course",
      title: "Interview preparation with JavaScript 2.0",
      price: "9000",
      cover: "/cover/1.png",
    },
    {
      bundle_id: "2",
      type: "Mock Test",
      title: "Aptitude - Averages, Mixtures & Allegation",
      price: "",
      cover: "/cover/2.png",
    },
    {
      bundle_id: "3",
      type: "Mock Test",
      title: "Aptitude - Simple & Compound Interest",
      price: "",
      cover: "/cover/3.png",
    },
    {
      bundle_id: "4",
      type: "Mock Test",
      title: "Aptitude - Partnership",
      price: "9000",
      cover: "/cover/4.png",
    },
    {
      bundle_id: "5",
      type: "Mock Test",
      title: "Aptitude - Time & Work",
      price: "9000",
      cover: "/cover/5.png",
    },
  ]);
  const [upgradeAt, setUpgradeAt] = useState(0);
  function changePriorityTop(current_pos, updated_pos) {
    let updateValue = bundle[updated_pos - 1];
    // console.log(updateValue);

    let untouchArr1 = bundle.slice(0, current_pos);
    // console.log(untouchArr1);
    let untouchArr2 = bundle.slice(updated_pos, bundle.length);
    // console.log(untouchArr2);
    let currentArr = bundle.slice(current_pos, updated_pos);
    // console.log(currentArr);
    currentArr.splice(0, 0, updateValue);
    currentArr.pop();

    const newArray = untouchArr1.concat(currentArr);
    const finalArray = newArray.concat(untouchArr2);
    // console.log(finalArray);
    setbundle(finalArray);
  }
  function onLoad() {
    const moveableDiv = document.querySelector(".moveable");
    let isDragging = false;
    let offsetX, offsetY;

    moveableDiv.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - moveableDiv.getBoundingClientRect().left;
      offsetY = e.clientY - moveableDiv.getBoundingClientRect().top;
      moveableDiv.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      moveableDiv.style.left = e.clientX - offsetX + "px";
      moveableDiv.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      moveableDiv.style.cursor = "grab";
    });
  }
  function deleteitem() {
    // write delete code here before submitting
  }
  return (
    <div
      onMouseOver={() => {
        const moveableDiv = document.querySelector(".bundle-wrap");
        let isDragging = false;
        let offsetX, offsetY;

        moveableDiv.addEventListener("mouseover", (e) => {
          isDragging = true;
          offsetX = e.clientX - moveableDiv.getBoundingClientRect().left;
          offsetY = e.clientY - moveableDiv.getBoundingClientRect().top;
          setUpgradeAt(offsetY / 100);
          document.getElementById(
            "offset_"
          ).innerText = `X:${offsetX} || Y:${offsetY}`;
        });
      }}
      className="absolute h-full bg-[#D2E3C8] w-full font-inter select-none"
    >
      <div id="offset_" className="absolute top-0 left-0">
        hi
      </div>
      <h1 className="text-green-900/80  text-center p-4 text-6xl font-bold">
        {" "}
        Chai aur Code
      </h1>
      <div className="justify-center flex">
        <div className="rounded-md w-10/12 max-w-[1200px] h-full bg-white p-4">
          <h2 className="text-4xl text-gray-700 font-bold">Manage Bundle</h2>
          <p className="text-gray-400 text-lg">
            Change orders of the products based on priority
          </p>
          <div className="w-11/12 max-w-[1200px] flex-col gap-5 bundle-wrap">
            {bundle.map((bundle, keys) => {
              return (
                <div className="w-[1150px] max-w-[1200px] shadow-md hover:border-gray-900  h-24 mt-2 border-2 border-gray-100 rounded-md">
                  <div
                    id={"bundleID_" + keys}
                    className="w-[1150px] max-w-[1200px]  shadow-md  h-24  border-2 border-gray-100 rounded-md "
                  >
                    <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                      <div class="col-span-2 flex">
                        {" "}
                        <div className="w-24 h-24 p-8">
                          <svg
                            id={keys}
                            onMouseDown={(e) => {
                              document
                                .getElementById("bundleID_" + e.target.id)
                                .classList.add("moveable");

                              onLoad();
                            }}
                            onMouseUp={(e) => {
                              let elem = document.getElementById(
                                "bundleID_" + e.target.id
                              );
                              // makeing div moveable by add class .moveable
                              elem.classList.remove("moveable");
                              // get id to change
                              elem.addEventListener("click", function (e) {
                                changePriorityTop(upgradeAt, keys + 1);
                              });
                            }}
                            className="hover:cursor-grab"
                            width="18"
                            height="28"
                            viewBox="0 0 18 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.33329 24C7.33329 25.8333 5.83329 27.3333 3.99996 27.3333C2.16663 27.3333 0.666626 25.8333 0.666626 24C0.666626 22.1666 2.16663 20.6666 3.99996 20.6666C5.83329 20.6666 7.33329 22.1666 7.33329 24ZM3.99996 10.6666C2.16663 10.6666 0.666626 12.1666 0.666626 14C0.666626 15.8333 2.16663 17.3333 3.99996 17.3333C5.83329 17.3333 7.33329 15.8333 7.33329 14C7.33329 12.1666 5.83329 10.6666 3.99996 10.6666ZM3.99996 0.666626C2.16663 0.666626 0.666626 2.16663 0.666626 3.99996C0.666626 5.83329 2.16663 7.33329 3.99996 7.33329C5.83329 7.33329 7.33329 5.83329 7.33329 3.99996C7.33329 2.16663 5.83329 0.666626 3.99996 0.666626ZM14 7.33329C15.8333 7.33329 17.3333 5.83329 17.3333 3.99996C17.3333 2.16663 15.8333 0.666626 14 0.666626C12.1666 0.666626 10.6666 2.16663 10.6666 3.99996C10.6666 5.83329 12.1666 7.33329 14 7.33329ZM14 10.6666C12.1666 10.6666 10.6666 12.1666 10.6666 14C10.6666 15.8333 12.1666 17.3333 14 17.3333C15.8333 17.3333 17.3333 15.8333 17.3333 14C17.3333 12.1666 15.8333 10.6666 14 10.6666ZM14 20.6666C12.1666 20.6666 10.6666 22.1666 10.6666 24C10.6666 25.8333 12.1666 27.3333 14 27.3333C15.8333 27.3333 17.3333 25.8333 17.3333 24C17.3333 22.1666 15.8333 20.6666 14 20.6666Z"
                              fill="#7F7F7F"
                            />
                          </svg>
                        </div>
                        <div className="rounded-md bg-gray-500 h-[70px] mt-3 w-32">
                          <img
                            className="h-[70px] w-32 rounded-md"
                            src={bundle.cover}
                            alt={bundle.title}
                          ></img>
                        </div>
                        <h1 className="font-semibold text-gray-900 text-2xl text-left pl-4 mt-8">
                          {bundle.title}
                        </h1>
                      </div>
                      <div className="flex justify-end">
                        {" "}
                        <div className=" h-24 w-40 grid   grid-columns-2">
                          <h1 className="font-bold justify-items-start mt-8 pr-5">
                            {bundle.price == ""
                              ? "Free"
                              : `₹​${bundle.price}/-`}
                          </h1>
                        </div>
                        <div className=" h-24  grid justify-items-center grid-columns-2">
                          <button className="bg-[#dbffce] pl-4 border pr-4 mt-8 text-sm rounded-md h-6">
                            {bundle.type}
                          </button>
                        </div>
                        {/* Last flex box with dots that open dropdown */}
                        <div className="h-24 dropdown relative grid justify-items-end grid-columns-2 p-8">
                          {/* this svg acts loke a button */}
                          <svg
                            width="5"
                            className="dropbtn"
                            height="21"
                            viewBox="0 0 5 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.84375 18.3125C4.84375 18.9341 4.59682 19.5302 4.15728 19.9698C3.71774 20.4093 3.1216 20.6562 2.5 20.6562C1.8784 20.6562 1.28226 20.4093 0.842718 19.9698C0.40318 19.5302 0.15625 18.9341 0.15625 18.3125C0.15625 17.6909 0.40318 17.0948 0.842718 16.6552C1.28226 16.2157 1.8784 15.9688 2.5 15.9688C3.1216 15.9688 3.71774 16.2157 4.15728 16.6552C4.59682 17.0948 4.84375 17.6909 4.84375 18.3125ZM4.84375 10.5C4.84375 11.1216 4.59682 11.7177 4.15728 12.1573C3.71774 12.5968 3.1216 12.8438 2.5 12.8438C1.8784 12.8438 1.28226 12.5968 0.842718 12.1573C0.40318 11.7177 0.15625 11.1216 0.15625 10.5C0.15625 9.8784 0.40318 9.28226 0.842718 8.84272C1.28226 8.40318 1.8784 8.15625 2.5 8.15625C3.1216 8.15625 3.71774 8.40318 4.15728 8.84272C4.59682 9.28226 4.84375 9.8784 4.84375 10.5ZM4.84375 2.6875C4.84375 3.3091 4.59682 3.90524 4.15728 4.34478C3.71774 4.78432 3.1216 5.03125 2.5 5.03125C1.8784 5.03125 1.28226 4.78432 0.842718 4.34478C0.40318 3.90524 0.15625 3.3091 0.15625 2.6875C0.15625 2.0659 0.40318 1.46976 0.842718 1.03022C1.28226 0.59068 1.8784 0.34375 2.5 0.34375C3.1216 0.34375 3.71774 0.59068 4.15728 1.03022C4.59682 1.46976 4.84375 2.0659 4.84375 2.6875Z"
                              fill="black"
                            />
                          </svg>

                          {/* the drop-down box starts here */}
                          <div className="dropdown-content w-36 right-0 text-sm mt-14 rounded-md absolute overflow-hidden border bg-gray-100">
                            <ul className="">
                              <li className="flex gap-2 pl-2 border hover:bg-gray-200">
                                <svg
                                  width="11"
                                  className="mt-1"
                                  height="14"
                                  viewBox="0 0 11 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.5 13V1M5.5 1L1 5.5M5.5 1L10 5.5"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <button
                                  onClick={() => {
                                    changePriorityTop(keys - 1, keys + 1);
                                  }}
                                  className="mb-1"
                                >
                                  Move to Top
                                </button>
                              </li>
                              <li className="flex gap-2 pl-2 border hover:bg-gray-200">
                                <svg
                                  width="11"
                                  className="mt-1"
                                  height="14"
                                  viewBox="0 0 11 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.5 1L5.5 13M5.5 13L10 8.5M5.5 13L1 8.5"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <button
                                  onClick={() => {
                                    changePriorityTop(keys, keys + 2);
                                  }}
                                  className="mb-1"
                                >
                                  Move to Bottom
                                </button>
                              </li>
                              <li className="flex gap-2 pl-2 border hover:bg-red-200">
                                <svg
                                  width="12"
                                  className="mt-1"
                                  height="13"
                                  viewBox="0 0 12 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.66667 10.4C4.84348 10.4 5.01305 10.3315 5.13807 10.2096C5.2631 10.0877 5.33333 9.92239 5.33333 9.75V5.85C5.33333 5.67761 5.2631 5.51228 5.13807 5.39038C5.01305 5.26848 4.84348 5.2 4.66667 5.2C4.48986 5.2 4.32029 5.26848 4.19526 5.39038C4.07024 5.51228 4 5.67761 4 5.85V9.75C4 9.92239 4.07024 10.0877 4.19526 10.2096C4.32029 10.3315 4.48986 10.4 4.66667 10.4ZM11.3333 2.6H8.66667V1.95C8.66667 1.43283 8.45595 0.936838 8.08088 0.571142C7.70581 0.205446 7.1971 0 6.66667 0H5.33333C4.8029 0 4.29419 0.205446 3.91912 0.571142C3.54405 0.936838 3.33333 1.43283 3.33333 1.95V2.6H0.666667C0.489856 2.6 0.320286 2.66848 0.195262 2.79038C0.0702379 2.91228 0 3.07761 0 3.25C0 3.42239 0.0702379 3.58772 0.195262 3.70962C0.320286 3.83152 0.489856 3.9 0.666667 3.9H1.33333V11.05C1.33333 11.5672 1.54405 12.0632 1.91912 12.4289C2.29419 12.7946 2.8029 13 3.33333 13H8.66667C9.1971 13 9.70581 12.7946 10.0809 12.4289C10.456 12.0632 10.6667 11.5672 10.6667 11.05V3.9H11.3333C11.5101 3.9 11.6797 3.83152 11.8047 3.70962C11.9298 3.58772 12 3.42239 12 3.25C12 3.07761 11.9298 2.91228 11.8047 2.79038C11.6797 2.66848 11.5101 2.6 11.3333 2.6ZM4.66667 1.95C4.66667 1.77761 4.7369 1.61228 4.86193 1.49038C4.98695 1.36848 5.15652 1.3 5.33333 1.3H6.66667C6.84348 1.3 7.01305 1.36848 7.13807 1.49038C7.2631 1.61228 7.33333 1.77761 7.33333 1.95V2.6H4.66667V1.95ZM9.33333 11.05C9.33333 11.2224 9.2631 11.3877 9.13807 11.5096C9.01305 11.6315 8.84348 11.7 8.66667 11.7H3.33333C3.15652 11.7 2.98695 11.6315 2.86193 11.5096C2.7369 11.3877 2.66667 11.2224 2.66667 11.05V3.9H9.33333V11.05ZM7.33333 10.4C7.51014 10.4 7.67971 10.3315 7.80474 10.2096C7.92976 10.0877 8 9.92239 8 9.75V5.85C8 5.67761 7.92976 5.51228 7.80474 5.39038C7.67971 5.26848 7.51014 5.2 7.33333 5.2C7.15652 5.2 6.98695 5.26848 6.86193 5.39038C6.73691 5.51228 6.66667 5.67761 6.66667 5.85V9.75C6.66667 9.92239 6.73691 10.0877 6.86193 10.2096C6.98695 10.3315 7.15652 10.4 7.33333 10.4Z"
                                    fill="#FA2D2D"
                                  />
                                </svg>

                                <button
                                  onClick={() => {
                                    deleteitem();
                                  }}
                                  className="mb-1"
                                >
                                  Remove
                                </button>
                              </li>
                            </ul>
                          </div>

                          {/* the drop-down box ends here */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
