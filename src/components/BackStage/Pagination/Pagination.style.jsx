import styled from 'styled-components';
import { size, Flex } from '../../../assets/css/global.style';

export const Square = styled(Flex)`
  ${size('28px', '28px')};
  border-radius: ${props => props.left ? '5px 0 0 5px' : '0 5px 5px 0'};
  border: solid 1px #DBDBDB;
  border-left: ${props => props.right ? '0' : null};
  border-right: ${props => props.left ? '0' : null};
  background: #FFFFFF;
  cursor: pointer;
`;

export const Page = styled(Flex)`
  ${size('28px', '28px')};
  border: solid 1px #DBDBDB;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
`;