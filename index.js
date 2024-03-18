import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Components/Heading";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FeedBack from "./Components/FeedBack";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
 
const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet />     {/*This outlet is replaced by the Children element */}
    </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
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
        path: "/feedBack",
        element: <FeedBack />
      },
      {
        path: "/menu/:resId",   //resId is dynamic can be change according to the restaurant Id
        element: <Menu />
      },
    ],
    errorElement: <Error />
  }
]);

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);