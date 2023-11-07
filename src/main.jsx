import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Rooms from './Pages/Rooms';
import Contact from './Pages/Contact';
import RoomDetails from './Pages/RoomDetails';
import MyBooking from './Pages/MyBooking';
import PrivateRoute from './Private/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet></Outlet>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/rooms')
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: ()=> fetch('http://localhost:5000/rooms')
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ()=> fetch('http://localhost:5000/rooms')
      },
      {
        path: "/myBookings",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
        
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster/>
  </React.StrictMode>,
)
