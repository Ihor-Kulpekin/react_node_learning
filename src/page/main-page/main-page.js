import React, {useMemo, useState} from 'react';
import HeaderComponent from "../../components/header/header.component";
import TableComponent from "../../components/table/table.component";
import styled from "styled-components";
import PaginationComponent from "../../components/pagination/pagination.component";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../slices/bmls.silce";
import ModalProgressBarComponent from "../../components/modals/modal-progress-bar/modal-progress-bar.component";
import axios from "axios";
import moment from "moment";

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainPage = () => {
  const {page, totalCount} = useSelector((state) => state.bmls);
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const rows = useMemo(() => {
    return 10;
  }, [])

  const setPageFunc = (page) => {
    dispatch(setPage(page));
  }

  const getStatusFunc = async (fileName) => {
    const status = await axios.get(`http://localhost:3002/api/v1/bmls/status?fileName=${fileName}`);
    setProgress(status.data.progress)
    if (status.data && status.data.downloadLink) {
      const url = window.URL.createObjectURL(new Blob([new Uint8Array(status.data.downloadLink.buffer.data)], { type: 'application/zip' }));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', status.data.downloadLink.file);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsShow(false);
      setProgress(0);
      setFileName('');
    } else {
      const progress = status.data.progress;

      const fileNameCompression = `${fileName}.zip`

      if(progress === 95){
        fileName = fileNameCompression
      }

      setTimeout(async()=>{
        await getStatusFunc(fileName);
      }, 1000)
    }
  }

  const download = async () => {
    setIsShow(true);
    const fileName = `excel_demo_${moment(new Date()).format('DD-MM-YYYY')}.xlsx`;
    setFileName(fileName);
    await axios.post('http://localhost:3002/api/v1/bmls/download', {
      fileName
    }, {
      headers: {
        Accept: 'application/json',
      }
    });

    await getStatusFunc(fileName);
  }

  return (
    <MainPageWrapper>
      <HeaderComponent/>
      <TableComponent download={download}/>
      <PaginationComponent changePage={setPageFunc} page={page} totalCount={totalCount} rows={rows}/>
      <ModalProgressBarComponent isOpen={isShow} progress={progress} fileName={fileName}/>
    </MainPageWrapper>
  );
};

export default MainPage;
