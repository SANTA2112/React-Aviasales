import React from 'react';
import Transplants from '../Transplants/';
import { checkboxData } from "../constants";
import { Text, Wrapper } from "./styled";

export default ({ takeFilter, takeOnlyOneFilterType, filterType }) => (
  <Wrapper>
    <Text>Количество пересадок</Text>
    { checkboxData.map(el => <Transplants
                                  key={el.value}
                                  name={el.name}
                                  value={el.value}
                                  text={el.text}
                                  filterType={filterType}
                                  takeFilter={takeFilter}
                                  takeOnlyOneFilterType={takeOnlyOneFilterType}
                                  />) }
  </Wrapper>
);
