import styled from 'styled-components';
import { size } from '../../assets/css/global.style';

export const Circle = styled.div`
  ${props => props.isActive ? size('30px', '30px') : size('20px', '20px')};
  border-radius: 50%;
  background: ${props => props.bg};
  margin-right: ${props => props.mr}px;
  border: ${props => props.isActive ? 'solid 1px #666666' : null};
  box-shadow: ${props => props.isActive ? 'inset 0 0 0 3px #FFFFFF' : null};
  cursor: pointer;
`;