import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";

import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import AboutWhy from "./pages/about/AboutWhy";
import AboutCode from "./pages/about/AboutCode";
import AboutHis from "./pages/about/AboutHis";


function App() {
  const Layout = () => {
    return (
     
      <div className="app">
      
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      

      </div>

    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/aboutwhy",
          element: <AboutWhy />,
        },
        {
          path: "/aboutcode",
          element: <AboutCode />,
        },
        {
          path: "/abouthis",
          element: <AboutHis />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;