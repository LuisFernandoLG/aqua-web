import { Main } from "./components/containers/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import NavBarWrapper from "./components/NavBarWrapper";
import Drivers from "./routes/Drivers";
import Users from "./routes/Users";
import DriverForm from "./routes/DriverForm";
import NotAuth from "./routes/NotAuth";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    element: <NavBarWrapper />,
    path: "/",
    children: [
      {
        element: <PrivateRoute element={Main}/>,
        path: "/",
      },
      {
        element: <PrivateRoute element={Drivers}/>,
        path: "/conductores",
      },

      {
        element: <PrivateRoute element={Users}/>,
        path: "/clientes",
      },

      {
        element: <Login/>,
        path: "/inicio-sesion",
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <ProSidebarProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProSidebarProvider>
    </AuthProvider>
  );
}

export default App;
