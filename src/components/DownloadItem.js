import React from "react";
import styled from "styled-components/macro";
import fileDownload from "js-file-download";

import downloadIconSrc from "../icons/download-icon.png";
import disabledDownloadIconSrc from "../icons/disabled-download-icon.png"

const DownloadContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DownloadBtn = styled.img`
  width: 25px;
  cursor: ${props => props.isDisable ? 'none' : 'pointer'};
  margin-left: 5px;
`;

const DownloadItem = ({ type, isDisable }) => {
  const data = 'This text for testing download action';
  const handleDownload = () => {
    fileDownload(data, 'download_file');
  };
  return (
    <DownloadContainer>
      <div>{type}</div>
      <DownloadBtn
        isDisable={isDisable}
        src={isDisable ? disabledDownloadIconSrc : downloadIconSrc}
        onClick={handleDownload}
        alt="download icon"
      />
    </DownloadContainer>
  )
};

export default DownloadItem;