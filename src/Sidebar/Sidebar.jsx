import React from 'react';
import Currency from '../Currency/';
import FilterTransplants from '../FilterTransplants/';
import { SideWrap } from "./styled";

export default ({ takeCurr, takeFilter, takeOnlyOneFilterType, curr, filterType }) => (
  <SideWrap>
    <Currency takeCurr={takeCurr} curr={curr}/>
    <FilterTransplants takeFilter={takeFilter} takeOnlyOneFilterType={takeOnlyOneFilterType} filterType={filterType} />
  </SideWrap>
);
