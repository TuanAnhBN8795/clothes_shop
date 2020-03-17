import React from "react";
import TimeSlider from "react-input-slider";
import styled from 'styled-components/macro'

import pauseIconSrc from "../icons/pause-icon.png";
import playIconSrc from "../icons/play-icon.png";
import DownloadItem from  "./DownloadItem";
import ControlButtonGroup from "./ControlButtonGroup";
import ShoppingSection from "./ShoppingSection";

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-top: 1px solid #333;
  padding: 15px 10px;
`;

const SongName = styled.div`
  width: 20%;
  white-space: nowrap;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const ControlBtnGroup = styled.div`
  margin-top: 2px;
`;

const ControlBtn = styled.img`
  width: 25px;
  cursor: pointer;
  margin-left: 40px;
  margin-right: 5px;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
`;

const RowItem = (
  {
    isPlay,
    currentTime,
    duration,
    idAudio,
    audioInfo,
    handlePausePlayClick,
    handleTimeSliderChange,
    openYoutube,
    openSheetDemo,
  }) => {
  const { title, price, youtubeSrc, sheetDemoSrc } = audioInfo;
  return (
    <RowContainer>
      <SongName>{title}</SongName>
      <ControlBtnGroup onClick={() => handlePausePlayClick(idAudio)}>
        {isPlay
          ? <ControlBtn src={pauseIconSrc} alt="pause icon" />
          : <ControlBtn src={playIconSrc} alt="play icon"/>}
      </ControlBtnGroup>
      <ProgressBar>
        <TimeSlider
          axis="x"
          xmax={duration}
          x={currentTime}
          onChange={handleTimeSliderChange}
          styles={{
            track: {
              backgroundColor: "#e3e3e3",
              height: "4px",
              cursor: "pointer",
              "pointer-events": !isPlay && "none",
            },
            active: {
              backgroundColor: "#F1C40F",
              height: "4px",
            },
            thumb: {
              marginTop: "-4px",
              width: "12px",
              height: "12px",
              backgroundColor: "#F1C40F",
              borderRadius: "50%",
              cursor: "pointer",
            },
          }}
        />
      </ProgressBar>
      <DownloadItem type="MP3" isDisable={false}/>
      <ControlButtonGroup
        openYoutube={openYoutube}
        youtubeSrc={youtubeSrc}
        openSheetDemo={openSheetDemo}
        sheetDemoSrc={sheetDemoSrc}
      />
      <ShoppingSection price={price}/>
    </RowContainer>
  );
};

export default RowItem;
