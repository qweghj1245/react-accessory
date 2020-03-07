import styled from 'styled-components';
import { size } from '../../assets/css/global.style';

export const TopButton = styled.div`
  ${size('40px', '40px')}
  border: solid 2px #EAE8E6;
  color: #72665A;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  position: ${props => props.direct === 'fixed' ? 'fixed' : 'absolute'};
  right: ${props => props.right ? props.right : null};
  left: ${props => props.left ? props.left : null};
  bottom: ${props => props.bottom ? props.bottom : null};
  cursor: pointer;
  background: #EAE8E6;
  border: solid 2px #CCCCCC;
  z-index: 10;
`;