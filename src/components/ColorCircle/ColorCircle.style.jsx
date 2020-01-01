import styled from 'styled-components';
import { size } from '../../assets/css/global.style';

const convertColor = (color) => {
  switch (color) {
    case 'red':
      return `#DB0401`;
    case 'blue':
      return `#0A3B80`;
    default:
      return '';
  }
}

export const Circle = styled.div`
  ${props => props.isActive ? size('30px', '30px') : size('20px', '20px')};
  border-radius: 50%;
  background: ${props => convertColor(props.bg)};
  margin-right: ${props => props.mr}px;
  border: ${props => props.isActive ? 'solid 1px #666666' : null};
  box-shadow: ${props => props.isActive ? 'inset 0 0 0 3px #FFFFFF' : null};
`;