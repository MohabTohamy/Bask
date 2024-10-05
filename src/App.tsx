import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import './index.css';
import './App.css';
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Components/Appointment/Dashboard/Dashboard";




const router = createBrowserRouter([{
  path: "/", element: <Layout />, children: [{
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/appointment",
    element: <Dashboard />,
  },
  {
    path: "/forgetpassword",
    element: <ForgotPassword />,
  },
  {
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
export default App