import React, {useEffect, useMemo} from 'react';
import styled from "styled-components";
import TableItemComponent from "./table-item/table-item.component";
import {useDispatch, useSelector} from "react-redux";
import {getBmls} from "../../slices/bmls.silce";
import axios from "axios";
import moment from "moment";

const TableComponentStyled = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100px;
    font-size: 14px;
    text-transform: uppercase;
    text-align: left;
    background-color: #0b2b39;
    color: white;
  }

   td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}
`

const MenuButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1170px;
  margin-bottom: 20px;

  .download_button {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    :hover {
      color: rgba(0, 0, 0, 0.51);
    }
  }
`

const TableComponent = ({download}) => {
  const {bmls, page} = useSelector((state) => state.bmls);
  const dispatch = useDispatch();

  const rows = useMemo(() => {
    return 10;
  }, [])

  const fetchBmls = () => {
    dispatch(getBmls({
      limit: rows,
      page,
      skip: rows * (page - 1)
    }))
  };

  useEffect(fetchBmls, [page])

  return (
    <>
      <MenuButtonsWrapper>
        <div onClick={download} className="download_button">
          Download
        </div>
      </MenuButtonsWrapper>
      <TableComponentStyled>
        <tr>
          <th>Hotel Name</th>
          <th>Scan Date</th>
          <th>Source</th>
          <th>Channel</th>
          <th>Chekin-in</th>
          <th>Los</th>
          <th>Pos</th>
          <th>Room Type</th>
          <th>Brand Price</th>
          <th>Ota Price</th>
        </tr>
        {
          bmls && bmls.length ? (
            bmls.map((bml) => (
              <TableItemComponent key={bml._id} bml={bml}/>
            ))
          ) : null
        }
      </TableComponentStyled>
    </>
  );
};

export default TableComponent;
