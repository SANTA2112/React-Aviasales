import styled from 'styled-components';
import oncheck from '../_assets/images/oncheck.png';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #2196f3;
  font-family: "Open Sans Semibold";
  font-size: 11px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0.5px;
  cursor: pointer;
  opacity: 0;
  transition: opacity .3s;
  will-change: opacity;
  outline: none;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover ${Button} {
    opacity: 1;
  }
`;

export const Label = styled.label`
  color: #4a4a4a;
  font-family: "Open Sans";
  font-size: 13px;
  line-height: 35px;
  user-select: none;
  cursor: pointer;
  position: relative;
  padding-left: 29px;
  width: 134px;
  &:before {
    content: '';
    width: 17px;
    height: 17px;
    border-radius: 3px;
    border: 1px solid #d2d5d6;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:after {
    content: '';
    background: url('${oncheck}') center center/cover;
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 5px;
    opacity: 0;
  }
  ${Checkbox}:checked + &:after {
    opacity: 1;
  }
  ${Checkbox}:checked + &:before {
    border-color: #2196f3;
  }
`;
