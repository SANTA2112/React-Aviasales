import styled from 'styled-components';

export const Check = styled.input.attrs({type: 'checkbox'})`
  display: none;
`;

export const Text = styled.div`
  padding: 8px 21px;
  border-color: #d2d5d6;
  border-style: solid;
  border-width: 1px;
  transition: border-color .3s;
  ${({ value }) => value === 'RUB' && 'border-radius: 5px 0 0 5px; border-left-width: 1px; border-right-width: 0;'}
  ${({ value }) => value === 'EUR' && 'border-radius: 0 5px 5px 0; border-left-width: 0; border-right-width: 1px;'}
  &:hover {
    border-color: #64b5f5;
  }
`

export const Label = styled.label`
  background-color: #f2fcff;
  font-family: "Open Sans Semibold";
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #2196f3;
  user-select: none;
  cursor: pointer;
  & ${Check}:checked + ${Text} {
    color: #fff;
    background-color: #2196f3;
    border-color: #2196f3;
  }
`;
