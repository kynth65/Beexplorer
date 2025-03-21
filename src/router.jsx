import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import LocationList from "./pages/LocationList";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/locations",
    element: <LocationList />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
