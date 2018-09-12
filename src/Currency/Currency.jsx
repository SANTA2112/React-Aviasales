import React from 'react';
import { currList } from "../constants";
import Checkbox from '../Checkbox/'
import { BntWrap, Header } from "./styled";

export default ({ takeCurr, curr }) => {
  const handleChange = value => {
    takeCurr(value);
  }

  return (
    <div>
      <Header>Валюта</Header>
      <BntWrap> { currList.map(box =>
                          <Checkbox
                            key={box.value}
                            name={box.name}
                            value={box.value}
                            handleChange={handleChange}
                            curr={curr}
                          />)
                }
      </BntWrap>
    </div>
  );
};
