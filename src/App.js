import React, { useState, useRef } from "react";

import "./App.scss";
import audios from "./audios";

import RowItem from "./components/RowItem";

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
      <RowItem
        isPlay={isPlay}
        currentTime={currentTime}
        duration={duration}
        songTile={audios[0].title}
        handlePausePlayClick={handlePausePlayClick}
        handleTimeSliderChange={handleTimeSliderChange}
      />
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
