import React from 'react';
import styled from "styled-components";

const InputComponentWrapper = styled.div`
  width: 50%;
  max-width: 50%;
  padding: 15px;

  .input {
    width: 100%;
    max-width: 100%;
    height: 40px;
    border-radius: 25px;
    font-size: 20px;
    padding-left: 25px;
  }
`

const InputComponent = ({text = 'Search...', onBlur, onFocus, value, onChange}) => {
  return (
    <InputComponentWrapper>
      <input type="text" className="input" value={value} onChange={onChange} placeholder={text} onBlur={onBlur} onFocus={onFocus}/>
    </InputComponentWrapper>
  );
};

export default InputComponent;
