import React from "react";
import styled from "styled-components/macro";
import Modal from "react-modal";

const SheetDemoModalContainer = styled.div`
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
  padding-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  @media only screen and (max-width: 600px) {
    top: 10vh;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40vh;
  }
`;

const SheetDemoCloseBtn = styled.button`
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

const SheetDemoContent = styled.img`
  width: 60%;
  height: auto;
  margin-left: 20%;
  margin-right: 20%;
`;

const SheetDemoModal = ({ modalIsOpen, sheetDemoSrc, closeModal }) => {
  return (
    <SheetDemoModalContainer>
      <ContentModal
        isOpen={modalIsOpen}
        contentLabel="SheetDemo Modal"
        onRequestClose={closeModal}
      >
        <SheetDemoCloseBtn onClick={closeModal}>X</SheetDemoCloseBtn>
        <SheetDemoContent
          src={sheetDemoSrc}
        />
      </ContentModal>
    </SheetDemoModalContainer>
  )
};

export default SheetDemoModal;