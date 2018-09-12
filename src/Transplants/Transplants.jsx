import React from 'react';
import { Button, Checkbox, Label, Wrapper } from "./styled";

export default ({ name, value, text, takeFilter, takeOnlyOneFilterType, filterType }) => (
  <Wrapper>
    <Checkbox id={value} name={name} value={value} onChange={e => takeFilter(e)} checked={filterType.includes(value)}/>
    <Label htmlFor={value}>{text}</Label>
    <Button onClick={e => takeOnlyOneFilterType([+e.target.name])} name={value}>Только</Button>
  </Wrapper>
);
