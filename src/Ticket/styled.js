import styled from 'styled-components';
import arrow from '../_assets/images/arrow.png';
import companyLogo from '../_assets/images/TK_LOGO1.png';

export const Item = styled.li`
  margin-bottom: 20px;
  padding: 25px 25px 20px;
  box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  list-style: none;
  display: flex;
  transition: box-shadow .3s;
  position: relative;
  &:hover {
    box-shadow: 0 5px 25px rgba(91, 137, 164, 0.1);
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 37%;
    width: 1px;
    height: 161px;
    background-color: #eceff1;
  }
  @media (max-width: 540px) {
    flex-direction: column-reverse;
    padding: 16px;
    &:before {
      display: none;
    }
  }
`;

export const Button = styled.button`
  border: none;
  padding: 6px 36px;
  text-align: center;
  width: 160px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 0 #d64d08;
  border-radius: 5px;
  background-color: #ff6d00;
  color: #ffffff;
  font-size: 16px;
  font-family: "Open Sans Semibold";
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s;
  &:hover {
    background-color: #ff8124;
  }
  @media (max-width: 540px) {
    align-self: center;
    padding: 6px 0;
  }
`;

export const Span = styled.span`
  font-family: "Helvetica Neue Desk Interface 2";
  font-weight: 400;
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 540px) {
    margin-bottom: 15px;
  }
`;

export const Info = styled.div`
  ${({ rigth }) => rigth && 'margin-right: 106px;'}
`;

export const Time = styled.div`
  color: #4a4a4a;
  font-family: "Open Sans";
  font-size: 32px;
  line-height: 26px;
`;

export const City = styled.div`
  color: #4a4a4a;
  font-size: 12px;
  line-height: 18px;
  font-family: "Open Sans Semibold";
  font-weight: 600;
  margin-top: 8px;
`;

export const Date = styled.div`
  color: #8b9497;
  font-family: "Open Sans";
`;

export const Transplantation = styled.div`
  color: #8b9497;
  font-family: "Open Sans Semibold";
  font-size: 10px;
  font-weight: 600;
  line-height: 12.1px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
export const Arrow = styled.div`
  width: 110px;
  height: 13px;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: url('${arrow}') center center/cover;
`;

export const Logo = styled.img.attrs({ src: companyLogo })`
  width: 130px;
  height: 60px;
`;

export const BuySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 48px;
  @media (max-width: 540px) {
    flex-direction: row;
    margin: 0;
  }
`;
