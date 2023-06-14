import { createBrowserRouter } from "react-router-dom";
import Banner from "../componets/Banner";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import UpdateService from "../Pages/UpdateService/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://downtown-adidas-server.vercel.app/services"),
        element: <Home />,
      },
      {
        path: "/services",
        loader: () =>
          fetch("https://downtown-adidas-server.vercel.app/services"),
        element: <Services />,
      },
      {
        path: "/addservice",
        element: <AddService />,
      },
      {
        path: "/banner",
        element: <Banner />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://downtown-adidas-server.vercel.app/services/${params.id}`
          ),
        element: <UpdateService />,
      },
    ],
  },
]);

export default router;
