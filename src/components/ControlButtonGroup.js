import React from "react";
import styled from "styled-components/macro";

const ControlButtonGroupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonStyle = styled.button`
  background-color: #f1c40f;
  color: white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
`;

const OpenYoutubeBtn = styled(ButtonStyle)`
`;

const OpenSheetDemoBtn = styled(ButtonStyle)`
`;

const ControlButtonGroup = (
  {
    youtubeSrc,
    openYoutube,
    sheetDemoSrc,
    openSheetDemo,
  }) => {
  const handleOpenYoutube = () => {
    openYoutube(youtubeSrc);
  };

  const handleOpenSheetDemo = () => {
    openSheetDemo(sheetDemoSrc);
  };

  return (
    <ControlButtonGroupStyle>
      <OpenYoutubeBtn
        onClick={handleOpenYoutube}
      >
        Xem Youtube
      </OpenYoutubeBtn>
      <OpenSheetDemoBtn
        onClick={handleOpenSheetDemo}
      >
        Xem thử
      </OpenSheetDemoBtn>
    </ControlButtonGroupStyle>
  )
};

export default ControlButtonGroup;