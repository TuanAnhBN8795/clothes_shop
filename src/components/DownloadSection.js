import React from "react";
import styled from "styled-components/macro";

import DownloadItem from "./DownloadItem";

const DownloadSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
`;

const DownloadSection = () => {
  return (
    <DownloadSectionStyle>
      <DownloadItem type="MP3"/>
      <DownloadItem type="PDF"/>
    </DownloadSectionStyle>
  )
};

export default DownloadSection;