import React from "react";
import styled from "styled-components/macro";

const PriceStyle = styled.div`
  color: ${props => props.isFree ? '#2ecc71' : '#e74c3c'};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

const PriceTag = ({ price }) => {
  return (
    <PriceStyle isFree={!price}>
      {!price ? 'Free' : price}
    </PriceStyle>
  )
};

export default PriceTag;