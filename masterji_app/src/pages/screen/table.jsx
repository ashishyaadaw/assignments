import React, { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

function TableData() {
  const [num_rows, setNum_rows] = useState(5);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        (event.key === "k" && event.ctrlKey) ||
        (event.key === "k" && event.altKey)
      ) {
        event.preventDefault();
        document.getElementById("search_list").focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  function handleSearch(searchStr) {
    if (searchStr) {
      setCourseDisplay(
        courselist.filter((course) => course.title === searchStr)
      );
    } else {
      setCourseDisplay(courselist.slice(0, 5));
    }
  }
  const [courselist, setCourseList] = useState([
    {
      id: "1",
      title: "SQL Basics To Advanced Mastery Course",
      cover: "/cover/6.png",
      start_date: "20 Jul 2024",
      end_date: "28 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "Published",
    },
    {
      id: 1,
      title: "Product A",
      cover: "https://example.com/product-a.jpg",
      start_date: "2023-05-01",
      end_date: "2023-06-30",
      price: 49.99,
      validity: true,
      status: "published",
    },
    {
      id: 2,
      title: "Product B",
      cover: "https://example.com/product-b.jpg",
      start_date: "2023-05-15",
      end_date: "2023-07-15",
      price: 29.99,
      validity: true,
      status: "published",
    },
    {
      id: "2",
      title: "30 Days Of Javascript Challenge",
      cover: "/cover/7.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "Unpublished",
    },
    {
      id: 1,
      title: "Product A",
      cover: "https://example.com/product-a.jpg",
      start_date: "2023-05-01",
      end_date: "2023-06-30",
      price: 49.99,
      validity: true,
      status: "published",
    },
    {
      id: 2,
      title: "Product B",
      cover: "https://example.com/product-b.jpg",
      start_date: "2023-05-15",
      end_date: "2023-07-15",
      price: 29.99,
      validity: true,
      status: "published",
    },
    {
      id: "3",
      title: "Basics To Advanced Mastery Course",
      cover: "/cover/1.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "4",
      title: "Interview Preparation With Javascript 2.0",
      cover: "/cover/2.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "5",
      title: "Basics To Advanced Mastery Course",
      cover: "/cover/3.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "6",
      title: "Interview Preparation With Javascript 2.0",
      cover: "/cover/4.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "7",
      title: "Basics To Advanced Mastery Course",
      cover: "/cover/5.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "8",
      title: "Interview Preparation With Javascript 2.0",
      cover: "/cover/4.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "9",
      title: "Interview Preparation With Javascript 2.0",
      cover: "/cover/4.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "10",
      title: "Interview Preparation With Javascript 2.0",
      cover: "/cover/4.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: 1,
      title: "Product A",
      cover: "https://example.com/product-a.jpg",
      start_date: "2023-05-01",
      end_date: "2023-06-30",
      price: 49.99,
      validity: true,
      status: "published",
    },
    {
      id: 2,
      title: "Product B",
      cover: "https://example.com/product-b.jpg",
      start_date: "2023-05-15",
      end_date: "2023-07-15",
      price: 29.99,
      validity: true,
      status: "published",
    },
  ]);
  const [courseDisplay, setCourseDisplay] = useState([
    {
      id: "1",
      title: "SQL Basics To Advanced Mastery Course",
      cover: "/cover/1.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "unpublished",
    },
    {
      id: "1",
      title: "SQL Basics To Advanced Mastery Course",
      cover: "/cover/1.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "1",
      title: "SQL Basics To Advanced Mastery Course",
      cover: "/cover/1.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
    {
      id: "1",
      title: "SQL Basics To Advanced Mastery Course",
      cover: "/cover/1.png",
      start_date: "13 Jul 2024",
      end_date: "12 AUg 2024",
      price: "₹ 0",
      validity: "180 days",
      status: "published",
    },
  ]);
  function paginate(num_rows, array) {
    let a = [];
    for (let index = 0; index < num_rows; index++) {
      if (array[index]) {
        a.push(array[index]);
      }
    }
    setCourseDisplay(a);
  }
  function nextPage(from, to, array) {
    let a = [];

    setCourseDisplay(array.slice(from, to));
  }
  function prevPage(from, to, array) {
    let a = [];

    setCourseDisplay(array.slice(from, to));
  }
  return (
    <div className="h-full w-full bg-[#E2BBE9] absolute font-dm-sans">
      <div id="offset_" className="absolute top-0 left-0">
        hi
      </div>
      <h1 className="text-[#444b79]  text-center p-4 text-6xl font-bold">
        {" "}
        Chai aur Code
      </h1>
      <div className="justify-center flex">
        <div className="rounded-md w-10/12 max-w-[1200px] h-full bg-gray-100 p-4">
          <h2 className="text-4xl text-gray-700 font-bold">Batches</h2>
          <p className="text-gray-400 text-lg">
            Create learner’s batch and share information at the same time.
          </p>
          <div>
            <input
              type="text"
              id="search_list"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              className="bg-white border rounded-sm h-10 w-80 pl-2"
              placeholder="Search by Title (alt+k or cmd+k)"
              autofocus
            ></input>
            <button className=" pl-4  pr-4 h-10 bg-[#6C6BAF] rounded-sm">
              Search
            </button>
          </div>
          <div className="w-full p-4 mt-4 h-full text-center bg-white rounded-md">
            <div className=" rounded-md  border-2 border-gray-600 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className=" gap-5 text-gray-700 text-md  border-b-2 border-gray-600">
                    <th className="min-w-96 text-left border h-14 bg-gray-300">
                      Title
                    </th>
                    <th className="min-w-36 border h-14 bg-gray-300">
                      Start Date
                    </th>
                    <th className="min-w-36 border h-14 bg-gray-300">
                      End Date
                    </th>
                    <th className="min-w-32 border h-14 bg-gray-300">Price</th>
                    <th className="min-w-40 border h-14 bg-gray-300">
                      Validity/Expiry
                    </th>
                    <th className="min-w-32 border h-14 bg-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courseDisplay.map((course, keys) => {
                    return (
                      <tr className="text-sm">
                        <td className="p-1 h-16  border-l border-r ">
                          <div class="flex">
                            {" "}
                            <div className=""></div>
                            <div className="rounded-md bg-gray-500 h-[50px]">
                              <img
                                className="h-[50px] w-24 rounded-md"
                                src="/cover/1.png"
                              ></img>
                            </div>
                            <h1 className=" text-gray-900 text-[16px] text-left pl-4 mt-2">
                              {course.title}
                            </h1>
                          </div>
                        </td>
                        <td className=" h-16 border-l border-r  ">
                          {" "}
                          {course.start_date}
                        </td>
                        <td className=" h-16 border-l border-r  ">
                          {" "}
                          {course.end_date}
                        </td>
                        <td className=" h-16 border-l border-r  ">
                          {" "}
                          {course.price}
                        </td>
                        <td className=" h-16 border-l border-r  ">
                          {" "}
                          {course.validity}
                        </td>
                        <td className=" h-16 border-l border-r  ">
                          <button
                            className={
                              course.status == "Published" ||
                              course.status == "published"
                                ? "bg-green-200 pl-2 pr-2 border rounded-sm text-gray-700"
                                : "bg-red-200 pl-2 pr-2 border rounded-sm text-gray-700"
                            }
                          >
                            {course.status}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4  m-4  justify-end">
              <div className="p-3 ">
                <span className="mt-3">Rows per page</span>{" "}
              </div>
              <div>
                <select
                  onChange={(e) => {
                    setNum_rows(e.target.value);
                    paginate(e.target.value, courselist);
                  }}
                  className="bg-white h-10 w-10 border rounded-sm"
                >
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <div>
                <button
                  onClick={() => {
                    prevPage(num_rows, num_rows + num_rows, courselist);
                  }}
                  className=""
                >
                  <svg
                    width="17"
                    height="30"
                    viewBox="0 0 17 30"
                    className="hover:fill-black"
                    fill="#D6D6D6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3426 26.1497C16.7637 26.574 17 27.147 17 27.7441C17 28.3412 16.7637 28.9142 16.3426 29.3385C16.1358 29.548 15.8892 29.7144 15.6173 29.828C15.3455 29.9415 15.0537 30 14.7589 30C14.4642 30 14.1724 29.9415 13.9005 29.828C13.6286 29.7144 13.3821 29.548 13.1753 29.3385L0.656395 16.5961C0.235807 16.1708 0 15.5974 0 15C0 14.4026 0.235807 13.8292 0.656395 13.4039L13.1753 0.661457C13.3821 0.451963 13.6286 0.285596 13.9005 0.172038C14.1724 0.0584801 14.4642 0 14.7589 0C15.0537 0 15.3455 0.0584801 15.6173 0.172038C15.8892 0.285596 16.1358 0.451963 16.3426 0.661457C16.7637 1.08577 17 1.65877 17 2.2559C17 2.85302 16.7637 3.42602 16.3426 3.85034L6.07579 15.0049L16.3426 26.1497Z"
                      // fill="#D6D6D6"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    prevPage(num_rows, num_rows + num_rows, courselist);
                  }}
                  className="m-2"
                >
                  <svg
                    width="17"
                    height="30"
                    viewBox="0 0 17 30"
                    className="hover:fill-black"
                    fill="#D6D6D6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.657432 3.85033C0.236262 3.42602 0 2.85302 0 2.2559C0 1.65877 0.236262 1.08577 0.657432 0.661457C0.86425 0.451963 1.11077 0.285593 1.38265 0.172035C1.65453 0.0584774 1.94634 0 2.24109 0C2.53583 0 2.82764 0.0584774 3.09952 0.172035C3.3714 0.285593 3.61792 0.451963 3.82474 0.661457L16.3436 13.4039C16.7642 13.8292 17 14.4026 17 15C17 15.5974 16.7642 16.1708 16.3436 16.5961L3.82474 29.3385C3.61792 29.548 3.3714 29.7144 3.09952 29.828C2.82764 29.9415 2.53583 30 2.24109 30C1.94634 30 1.65453 29.9415 1.38265 29.828C1.11077 29.7144 0.86425 29.548 0.657432 29.3385C0.236262 28.9142 0 28.3412 0 27.7441C0 27.147 0.236262 26.574 0.657432 26.1497L10.9242 14.9951L0.657432 3.85033Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableData;
