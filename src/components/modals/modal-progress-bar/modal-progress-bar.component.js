import React from 'react';
import {createPortal} from "react-dom";
import styled from "styled-components";
import ProgressBarComponent from "../../progress-bar/progress-bar.component";

const ModalProgressBarComponentWrapper = styled.div`
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 20px;
  border-radius: 10px;

  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.36);
  height: 100px;
  width: 30%;
  padding: 20px;

  .progress_bar {
    margin-bottom: 20px;
  }
  
  .file_name_block {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .cancel_download_block {
    font-size: 10px;
    color: #2cace2;
  }
`

const ModalProgressBarComponent = ({isOpen, fileName, progress}) => createPortal(
  <ModalProgressBarComponentWrapper isOpen={isOpen}>
    <div className="file_name_block">{fileName}</div>
    <ProgressBarComponent progress={progress}/>
    <div className="cancel_download_block">Cancel Download</div>
  </ModalProgressBarComponentWrapper>,
  document.body)

export default ModalProgressBarComponent;
