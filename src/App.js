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
`

const SongName = styled.div`
  font-weight: 500;
`

const ControlBtnGroup = styled.div`
  margin-top: 1px;
`

const PlayBtn = styled.img`
  width: 25px;
  cursor: pointer;
`

const PauseBtn = styled.img`
  width: 25px;
  cursor: pointer;
`

const ProgressBar = styled.div`
  background-color: #dadada;
  border-radius: 5px;
  height: 23px;
  padding: 0 10px;
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
            ? <PauseBtn src={pauseIconSrc} alt="pause icon" />
            : <PlayBtn src={playIconSrc} alt="play icon"/>}
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
                height: "3px",
                cursor: "pointer"
              },
              active: {
                backgroundColor: "#333",
                height: "3px",
              },
              thumb: {
                marginTop: "-4px",
                width: "10px",
                height: "10px",
                backgroundColor: "#333",
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
