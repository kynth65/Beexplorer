import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import LocationList from "./pages/LocationList";
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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
