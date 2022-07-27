import React from 'react';
import styled from "styled-components";
import moment from "moment";

const TrWrapper = styled.tr`
  width: 50%;
  
  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}
`

const TableItemComponent = ({bml}) => {
  return (
    <TrWrapper>
      <td>{bml.hotel_name}</td>
      <td>{moment(bml.scan_date).format('DD-MM-YYYY')}</td>
      <td>{bml.source}</td>
      <td>{bml.channel ? bml.channel : 'Google'}</td>
      <td>{moment(bml.check_in_date).format('DD-MM-YYYY')}</td>
      <td>{bml.LOS}</td>
      <td>{bml.proxy}</td>
      <td>{bml.hotel_bid.room_type ? bml.hotel_bid.room_type : ''}</td>
      <td>{bml.hotel_bid.price_for_comparison ? (bml.hotel_bid.price_for_comparison).toFixed(2) + bml.currencyId : ''}</td>
      <td>{bml.competitor_bid.price_for_comparison ? (bml.competitor_bid.price_for_comparison).toFixed(2) + bml.currencyId : ''}</td>
    </TrWrapper>
  );
};

export default TableItemComponent;
