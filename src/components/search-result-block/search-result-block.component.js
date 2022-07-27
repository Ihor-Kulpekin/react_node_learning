import React from 'react';
import styled from "styled-components";

const SearchResultBlockComponentWrapper = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 2px 9px 25px -2px rgba(0, 0, 0, 0.75);
  transition: height 1s ease-in-out;
  width: 100%;
  max-width: 50%;
  top: 70px;
  padding: ${({isActive}) => isActive ? '25px' : '0'};;
  height: ${({isActive}) => isActive ? '600px' : '0'};
  border-radius: 25px;
  margin-left: 30px;

  .search_result_item {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    font-size: 10px;
    color: black;
  }
`

const SearchResultBlockComponent = ({isActive, searchResults}) => {
  return (
    <SearchResultBlockComponentWrapper isActive={isActive}>
      {
        searchResults && searchResults.length ? (
          searchResults.map((searchResult) => (
            <div className="search_result_item">
              {
                searchResult.text
              }
            </div>
          ))
        ) : null
      }
    </SearchResultBlockComponentWrapper>
  );
};

export default SearchResultBlockComponent;
