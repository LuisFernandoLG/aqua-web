import { useContext } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  const { session } = useContext(authContext);

  if (!session) {
    return null;
  } else {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <MenuItem routerLink={<Link to="/" />}> Supervisión</MenuItem>
            <MenuItem routerLink={<Link to="/conductores" />}>
              {" "}
              Conductores
            </MenuItem>
            <MenuItem routerLink={<Link to="/clientes" />}> Clientes</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <button onClick={() => collapseSidebar()}>Collapse</button>
        </main>
      </div>
    );
  }
};

export default SideBar;
