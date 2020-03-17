import React from "react";
import styled from "styled-components/macro";
import Modal from "react-modal";

import imgSrc from "../images/img1.jpg";

const DemoSheetModalContainer = styled.div`
`;

const ContentModal = styled(Modal)`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
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

const DemoSheetOpenBtn = styled.button`
  color: blue;
  border: none;
`;

const DemoSheetCloseBtn = styled.button`
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

const DemoSheetContent = styled.img`
  width: 60%;
  height: auto;
  margin-left: 20%;
  margin-right: 20%;
`;

const DemoSheetModal = ({ modalIsOpen, openModal, closeModal }) => {
  return (
    <DemoSheetModalContainer>
      <DemoSheetOpenBtn
        onClick={openModal}
      >
        Open DemoSheet
      </DemoSheetOpenBtn>
      <ContentModal
        isOpen={modalIsOpen}
        contentLabel="DemoSheet Modal"
        onRequestClose={closeModal}
      >
        <DemoSheetCloseBtn onClick={closeModal}>X</DemoSheetCloseBtn>
        <DemoSheetContent
          src={imgSrc}
        />
      </ContentModal>
    </DemoSheetModalContainer>
  )
}

export default DemoSheetModal;