import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FirebaseProvider } from "../context/FirebaseContex";
import { Header } from "./containers/Header";
import SideBar from "./SideBar";

const NavBarWrapper = () => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <RouterPage>
          <Outlet />
        </RouterPage>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;

const RouterPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export default NavBarWrapper;
