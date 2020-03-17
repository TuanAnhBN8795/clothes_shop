import React from "react";
import styled from "styled-components/macro";

const ActionButton = styled.button`
  background-color: ${props => props.isFree ? '#2ecc71' : '#e74c3c'};
  color: white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  min-width: 80px;
`;

const BuyButton = ({ isFree }) => {
  const handleBuyAction = () => {
    alert("Bạn vừa chọn đặt mua thành công !!!")
  };

  const handleFreeAction = () => {
    alert("Bạn vừa tải miễn phí thành công !!!")
  };

  return (
    <ActionButton
      isFree={isFree}
      onClick={isFree ? handleFreeAction : handleBuyAction}
    >
      {isFree ? "Tải Free" : "Đặt mua"}
    </ActionButton>
  )
};

export default BuyButton;