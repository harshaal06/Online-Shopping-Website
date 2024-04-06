import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './views/Home/Home';
import Mobile from './views/Mobile/Mobile';
import Laptop from './views/Laptop/Laptop';
import Tablet from './views/Tablet/Tablet';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import OrderNow from './views/OrderNow/OrderNow';
import Login from './views/Login/Login';
import UserDashboard from './views/UserDashboard/UserDashboard';
import AdminDashboard from './views/AdminDashboard/AdminDashboard';
import AdminUpdateDetails from './views/AdminDashboard/AdminUpdateDetails';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mobile",
    element: <Mobile />
  },
  {
    path: "/laptop",
    element: <Laptop />
  },
  {
    path: "/tablet",
    element: <Tablet />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/OrderNow",
    element: <OrderNow />
  },
  {
    path: "/check-order",
    element: <UserDashboard />
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />
  },
  {
    path: "/admin-update-details",
    element: <AdminUpdateDetails />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Toaster />
  <RouterProvider router={router} />
  </>
);
