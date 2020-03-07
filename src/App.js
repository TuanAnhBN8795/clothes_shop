import React, { useState, useRef } from "react";

import "./App.scss";
import audios from "./audios";

import RowItem from "./components/RowItem";

const App = () => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [currentIdAudio, setCurrentIdAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = (idAudio) => {
    if(idAudio !== currentIdAudio) {
      setCurrentIdAudio(idAudio);
      audioRef.current.play();
      setPlay(true)
    } else {
      if (isPlay) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlay(!isPlay);
    }

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
        isPlay={currentIdAudio === 0 ? isPlay : false}
        currentTime={currentIdAudio === 0 ? currentTime : 0}
        duration={duration}
        songTile={audios[0].title}
        idAudio={0}
        handlePausePlayClick={handlePausePlayClick}
        handleTimeSliderChange={handleTimeSliderChange}
      />
      <RowItem
        isPlay={currentIdAudio === 1 ? isPlay : false}
        currentTime={currentIdAudio === 1 ? currentTime : 0}
        duration={duration}
        songTile={audios[1].title}
        idAudio={1}
        handlePausePlayClick={handlePausePlayClick}
        handleTimeSliderChange={handleTimeSliderChange}
      />
      <RowItem
        isPlay={currentIdAudio === 2 ? isPlay : false}
        currentTime={currentIdAudio === 2 ? currentTime : 0}
        duration={duration}
        songTile={audios[2].title}
        idAudio={2}
        handlePausePlayClick={handlePausePlayClick}
        handleTimeSliderChange={handleTimeSliderChange}
      />
      <audio
        ref={audioRef}
        src={audios[currentIdAudio].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </div>
  );
};

export default App;
