import React from "react";
import styled from "styled-components/macro";
import Modal from "react-modal";

const YoutubeModalContainer = styled.div`
`;

const ContentModal = styled(Modal)`
  position: absolute;
  top: 60px;
  left: 60px;
  right: 60px;
  bottom: 60px;
  background: rgb(255, 255, 255);
  overflow: auto;
  outline: none;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  @media only screen and (max-width: 600px) {
    top: 10vh;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40vh;
  }
`;

const YoutubeCloseBtn = styled.button`
  color: white;
  position: absolute;
  z-index: 999;
  padding: 4px 10px;
  right: 0;
  top: 0;
  font-weight: 600;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: red;
`;

const YoutubeFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const YoutubeModal = ({ modalIsOpen, closeModal, youtubeSrc }) => {
  return (
    <YoutubeModalContainer>
      <ContentModal
        isOpen={modalIsOpen}
        contentLabel="Youtube Modal"
        onRequestClose={closeModal}
      >
        <YoutubeCloseBtn onClick={closeModal}>X</YoutubeCloseBtn>
        <YoutubeFrame
          src={youtubeSrc}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </ContentModal>
    </YoutubeModalContainer>
  )
};

export default YoutubeModal;