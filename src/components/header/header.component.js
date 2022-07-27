import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Input from "../input/input.component";
import SearchResultBlock from "../search-result-block/search-result-block.component";
import {useDispatch, useSelector} from "react-redux";
import {debounce} from "lodash";

import {clearResults, getSearchResults} from "../../slices/searcResult.slice";

const HeaderComponentWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  background-color: #0b2b39;
  margin-bottom: 50px;
`

const HeaderComponent = () => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const {searchResults} = useSelector((state => state.searchResult))
  const dispatch = useDispatch();

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  }

  const handleInputFocus = () => {
    setIsActive(true)
  };

  const handleInputBlur = () => {
    dispatch(clearResults());
    setValue('');
    setIsActive(false);
  };

  const fetchResults = () => {
    if (value) {
      dispatch(getSearchResults(value))
    }
  }

  useEffect(fetchResults, [value])

  return (
    <HeaderComponentWrapper>
      <Input value={value} onChange={handleChangeValue} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
      <SearchResultBlock isActive={isActive} searchResults={searchResults}/>
    </HeaderComponentWrapper>
  );
};

export default HeaderComponent;
