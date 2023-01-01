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
        loader: () => fetch("http://localhost:5000/services"),
        element: <Home />,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/services"),
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
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <UpdateService />,
      },
    ],
  },
]);

export default router;
