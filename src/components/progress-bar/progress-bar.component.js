import React from 'react';
import styled from "styled-components";

const ProgressBarComponentWrapper = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin-bottom: 20px;
  
  .filler {
    height: 100%;
    width: ${({progress}) => `${progress}%`};
    background-color: #2cace2;
    border-radius: inherit;
    text-align: right;
  }
  
  .label {
    padding: 5px;
    color: white;
    font-weight: bold;
  }
`

const ProgressBarComponent = ({progress = 0}) => {
  return (
    <ProgressBarComponentWrapper progress={progress}>
      <div className="filler">
        <span className="label">{`${progress}%`}</span>
      </div>
    </ProgressBarComponentWrapper>
  );
};

export default ProgressBarComponent;
