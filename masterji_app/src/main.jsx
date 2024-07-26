import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import {
  createBrowserRouter,
  redirect,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Authentication from "./pages/auth/authentication.jsx";
import ValidateOTP from "./pages/auth/validateOTP.jsx";
import Screen from "./pages/screen/course.list.jsx";
import TableData from "./pages/screen/table.jsx";
import Brand from "./widgets/brand.jsx";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      return redirect("/otp-form");
    },
  },
  {
    path: "/otp-form",
    element: <ValidateOTP />,
  },
  {
    path: "/course-list",
    element: <Screen />,
  },
  {
    path: "/table",
    element: <TableData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Brand />
  </>
);
