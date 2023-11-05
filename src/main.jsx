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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet></Outlet>,
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
  </React.StrictMode>,
)
