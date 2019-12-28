import styled from 'styled-components';
import { backgroundImage } from '../../assets/css/global.style';

export const CardWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const CardImage = styled.div`
  ${(props) => backgroundImage(props.url)}
  height: ${props => props.height ? props.height : 304}px;
`;

export const CardTitle = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: #999999;
`;

export const CardPrice = styled.div`
  font-size: 14px;
  margin-top: 5px;
  color: #72665A;
`;