import React, { useState, useRef } from "react";

import "./App.scss";
import audios from "./audios";

import RowItem from "./components/RowItem";
import YoutubeModal from "./components/YoutubeModal";
import DemoSheetModal from "./components/DemoSheetModal";

const App = () => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [currentIdAudio, setCurrentIdAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isOpenYoutube, setOpenYoutube] = useState(false);
  const [isOpenDemoSheet, setOpenDemoSheet] = useState(false);

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

  const openYoutube = () => {
    setOpenYoutube(true)
  }

  const closeYoutube = () => {
    setOpenYoutube(false)
  }

  const openDemoSheet = () => {
    setOpenDemoSheet(true)
  }

  const closeDemoSheet = () => {
    setOpenDemoSheet(false)
  }

  return (
    <div className="App">
      <YoutubeModal
        modalIsOpen={isOpenYoutube}
        openModal={openYoutube}
        closeModal={closeYoutube}
      />
      <DemoSheetModal
        modalIsOpen={isOpenDemoSheet}
        openModal={openDemoSheet}
        closeModal={closeDemoSheet}
      />
      {audios.map((audio, index) => (
        <RowItem
          isPlay={currentIdAudio === index ? isPlay : false}
          currentTime={currentIdAudio === index ? currentTime : 0}
          duration={duration}
          songTile={audio.title}
          idAudio={index}
          handlePausePlayClick={handlePausePlayClick}
          handleTimeSliderChange={handleTimeSliderChange}
          isFree={audio.isFree}
          price={audio.price}
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
