import styled from 'styled-components';
import img from '../_assets/images/airbus.png';

export const Wrapper = styled.div`
  background-color: #f3f7fa;
  padding: 50px 0;
  text-align: center;
`;

export const Image = styled.img.attrs({ src: img })`
  width: 60px;
  height: 61px;
`;
