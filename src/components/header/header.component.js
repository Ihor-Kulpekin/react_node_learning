import React, {useState} from 'react';
import styled from "styled-components";
import Input from "../input/input.component";
import SearchResultBlock from "../search-result-block/search-result-block.component";

const HeaderComponentWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  background-color: #0b2b39;
  margin-bottom: 50px;
`

const HeaderComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleInputFocus = () => {
    setIsActive(true)
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  return (
    <HeaderComponentWrapper>
      <Input onFocus={handleInputFocus} onBlur={handleInputBlur}/>
      <SearchResultBlock isActive={isActive}/>
    </HeaderComponentWrapper>
  );
};

export default HeaderComponent;
