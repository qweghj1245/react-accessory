import styled from 'styled-components';
import { Text, size } from '../../../assets/css/global.style';

export const TagText = styled.div`
  ${props => Text(12, 100, props.mb ? props.mb : 0)};
  ${size('56px', '18px')};
  background: #FFC333;
  padding: 0 10px;
  color: #333333;
`;