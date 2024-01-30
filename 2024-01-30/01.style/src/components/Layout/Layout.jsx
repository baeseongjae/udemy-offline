import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <main className="px-14 py-[200px]">{children}</main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export default Layout;
