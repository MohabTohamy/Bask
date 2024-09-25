import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import './index.css';
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([{
  path: "/", element: <Layout />, children: [{
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
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
export default App