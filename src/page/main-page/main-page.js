import React from 'react';
import HeaderComponent from "../../components/header/header.component";
import TableComponent from "../../components/table/table.component";
import styled from "styled-components";

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainPage = () => {
  return (
    <MainPageWrapper>
     <HeaderComponent/>
     <TableComponent/>
    </MainPageWrapper>
  );
};

export default MainPage;
