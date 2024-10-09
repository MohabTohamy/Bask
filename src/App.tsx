import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import './App.css';
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Components/Appointment/Dashboard/Dashboard";
import BasicCalender from "./Components/ReactBigCalender/BasicCalender";
import 'react-big-calendar/lib/css/react-big-calendar.css';




const router = createBrowserRouter([{
  path: "/", element: <Layout />, children: [{
    path: "/Calendar",
    element: <BasicCalender />,
  },
  {
    path: "/appointment",
    element: <Dashboard />,
  }, {
    path: "/*",
    element: <NotFound />,
  },]
}

]);
function App() {
  return (
    <RouterProvider router={router} />
  )

}

export default App;
