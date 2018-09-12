import React from 'react';
import { Check, Label, Text } from "./styled";

export default ({ name, value, handleChange, curr }) => (
  <Label>
    <Check name={name} value={value} onChange={e => handleChange(e.target.value)} checked={curr.includes(value)}/>
    <Text value={value}>{ value }</Text>
  </Label>
);
