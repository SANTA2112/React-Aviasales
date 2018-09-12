import React from 'react';
import Currency from '../Currency/';
import { SideWrap } from "./styled";

export default ({ takeCurr, curr }) => (
  <SideWrap>
    <Currency takeCurr={takeCurr} curr={curr}/>
  </SideWrap>
);
