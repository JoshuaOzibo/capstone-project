import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UserDashboard from "./components/pages/UserDashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/pages/Details.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ToastMessage from "./components/toastMessage/ToastMessage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
      index: true,
      element: <App />,
      },
      {
      path: "analytics",
      element: <UserDashboard />,
      },
      {
        path: "/details/:urlCode",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="relative min-h-screen bg-[#090a15]">
    <React.StrictMode>
      <ToastMessage />
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
);
