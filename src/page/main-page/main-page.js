import React, {useMemo} from 'react';
import HeaderComponent from "../../components/header/header.component";
import TableComponent from "../../components/table/table.component";
import styled from "styled-components";
import PaginationComponent from "../../components/pagination/pagination.component";
import {useDispatch, useSelector} from "react-redux";
import {getBmls, setPage} from "../../slices/bmls.silce";

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainPage = () => {
  const {page, totalCount} = useSelector((state) => state.bmls);
  const dispatch = useDispatch();

  const rows = useMemo(() => {
    return 10;
  }, [])

  const setPageFunc = (page) => {
    dispatch(setPage(page));
  }

  return (
    <MainPageWrapper>
      <HeaderComponent/>
      <TableComponent/>
      <PaginationComponent changePage={setPageFunc} page={page} totalCount={totalCount} rows={rows}/>
    </MainPageWrapper>
  );
};

export default MainPage;
