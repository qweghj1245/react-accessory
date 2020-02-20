import styled from 'styled-components';
import { size } from '../../assets/css/global.style';

export const Side = styled.div`
  padding: 11px 20px;
  font-size: 12px;
  border: solid 1px #666666;
  ${props => `border-${props.hide}: 0`};
  cursor: pointer;
`;

export const Center = styled.div`
  ${size('58px', '41.25px')};
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  border: solid 1px #666666;
`;