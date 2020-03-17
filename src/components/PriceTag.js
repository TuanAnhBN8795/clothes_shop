import React from "react";
import styled from "styled-components/macro";

import { formatPrice } from "../utils/formatPrice";

const PriceStyle = styled.div`
  color: ${props => props.isFree ? '#2ecc71' : '#e74c3c'};
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const PriceTag = ({ price }) => {
  return (
    <PriceStyle isFree={!price}>
      {!price ? 'Free' : formatPrice(price)}
    </PriceStyle>
  )
};

export default PriceTag;