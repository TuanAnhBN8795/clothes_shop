import React from "react";
import styled from "styled-components/macro";

import PriceTag from "./PriceTag";
import BuyButton from "./BuyButton";

const ShoppingSectionStyle = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShoppingSection = ({ price }) => {

  return (
    <ShoppingSectionStyle>
      <PriceTag price={price}/>
      <BuyButton isFree={!price}/>
    </ShoppingSectionStyle>
  )
};

export default ShoppingSection;