import React from "react";
import styled from "styled-components/macro";

import PriceTag from "./PriceTag";
import BuyButton from "./BuyButton";

const ShoppingSectionStyle = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
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