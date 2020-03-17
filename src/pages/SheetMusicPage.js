import React, { useState, useRef } from "react";
import styled from 'styled-components/macro';

import RowItem from "../components/RowItem";
import YoutubeModal from "../components/YoutubeModal";
import SheetDemoModal from "../components/SheetDemoModal";

const SheetMusicContent = styled.div`
  padding: 20px 100px;
  border-bottom: 1px solid #ccc;
`;

const SheetMusicPage = ({ audios }) => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [currentIdAudio, setCurrentIdAudio] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isOpenYoutube, setOpenYoutube] = useState(false);
  const [youtubeSrc, setYoutubeSrc] = useState('');
  const [isOpenSheetDemo, setOpenSheetDemo] = useState(false);
  const [sheetDemoSrc, setSheetDemoSrc] = useState('');

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

  const openYoutube = (src) => {
    setYoutubeSrc(src);
    setOpenYoutube(true);
  };

  const closeYoutube = () => {
    setOpenYoutube(false);
  };

  const openSheetDemo = (src) => {
    setSheetDemoSrc(src);
    setOpenSheetDemo(true);
  };

  const closeSheetDemo = () => {
    setOpenSheetDemo(false);
  };

  return (
    <div>
      <YoutubeModal
        modalIsOpen={isOpenYoutube}
        youtubeSrc={youtubeSrc}
        closeModal={closeYoutube}
      />
      <SheetDemoModal
        modalIsOpen={isOpenSheetDemo}
        sheetDemoSrc={sheetDemoSrc}
        closeModal={closeSheetDemo}
      />
      <SheetMusicContent>
        {audios.map((audio, index) => (
          <RowItem
            isPlay={currentIdAudio === index ? isPlay : false}
            currentTime={currentIdAudio === index ? currentTime : 0}
            duration={duration}
            idAudio={index}
            audioInfo={audio}
            handlePausePlayClick={handlePausePlayClick}
            handleTimeSliderChange={handleTimeSliderChange}
            openYoutube={openYoutube}
            openSheetDemo={openSheetDemo}
          />
        ))}
      </SheetMusicContent>
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

export default SheetMusicPage;
