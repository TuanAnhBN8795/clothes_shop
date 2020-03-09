import React from "react";
import styled from "styled-components/macro";

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
  return (
    <DownloadContainer>
      <div>{type}</div>
      <DownloadBtn
        isDisable={isDisable}
        src={isDisable ? disabledDownloadIconSrc : downloadIconSrc}
        alt="download icon"
      />
    </DownloadContainer>
  )
}

export default DownloadItem;