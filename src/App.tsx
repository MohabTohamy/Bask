import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Charts from "./Components/Charts/Charts";





const router = createBrowserRouter([{
  path: "/", element: <Layout />, children: [
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/charts",
      element: <Charts />,
    },]
}

]);
function App() {
  return (

    <RouterProvider router={router} />

  )

}

export default App;
