import React from 'react';
import styled from "styled-components";

const SearchResultBlockComponentWrapper = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 2px 9px 25px -2px rgba(0,0,0,0.75);
  transition: height 1s ease-in-out;
  width: 50%;
  max-width: 50%;
  top: 70px;
  padding: ${({isActive}) => isActive ? '25' : '0'};;
  height: ${({isActive}) => isActive ? '600px' : '0'};
  border-radius: 25px;
  margin-left: 30px;
`

const SearchResultBlockComponent = ({isActive}) => {
  return (
    <SearchResultBlockComponentWrapper isActive={isActive}>

    </SearchResultBlockComponentWrapper>
  );
};

export default SearchResultBlockComponent;
