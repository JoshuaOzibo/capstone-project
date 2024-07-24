import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import UserDashboard from './components/pages/UserDashboard.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './components/pages/Details.tsx';
import ErrorPage from './components/pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/analytics",
    element: <UserDashboard />,
  },
  {
    path: "/details/:urlCode", // Add this route
    element: <Details />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
