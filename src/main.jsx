import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Destination",
    element: <Destination/>,
  },
  {
    path: "/Crew",
    element: <Crew />,
  },
  {
    path: "/Technology",
    element: <Technology />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
