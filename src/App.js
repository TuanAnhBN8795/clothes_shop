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
      {audios.map((audio, index) => (
        <RowItem
          isPlay={currentIdAudio === index ? isPlay : false}
          currentTime={currentIdAudio === index ? currentTime : 0}
          duration={duration}
          songTile={audio.title}
          idAudio={index}
          handlePausePlayClick={handlePausePlayClick}
          handleTimeSliderChange={handleTimeSliderChange}
        />
      ))}
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
