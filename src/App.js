import React, { useState, useRef } from "react";
import TimeSlider from "react-input-slider";
import styled from 'styled-components/macro'

import "./App.scss";
import pauseIconSrc from "./icons/pause-icon.png";
import playIconSrc from "./icons/play-icon.png";
import audios from "./audios";

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 15px 10px;
`

const SongName = styled.div`
  font-weight: 500;
`

const ControlBtnGroup = styled.div`
  margin-top: 2px;
`

const ControlBtn = styled.img`
  width: 25px;
  cursor: pointer;
  margin-left: 40px;
  margin-right: 5px;
`

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
`

const App = () => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <RowContainer>
        <SongName>{audios[0].title}</SongName>
        <ControlBtnGroup onClick={handlePausePlayClick}>
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
                cursor: "pointer"
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
      </RowContainer>
      <audio
        ref={audioRef}
        src={audios[0].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </div>
  );
};

export default App;
