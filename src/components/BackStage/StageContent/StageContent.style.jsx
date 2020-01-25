import styled from 'styled-components';
import { BaseWrapper, size, Text, Flex } from '../../../assets/css/global.style';

export const Wrapper = styled(BaseWrapper)`
  ${size('calc(100vw - 250px)', '100%')};
`;

export const HeadBar = styled(Flex)`
  ${size('100%', '60px')};
  padding: 17px 41px 22px 50px;
`;

export const HeadText = styled.div`
  ${props => props.fz ? Text(props.fz, 100, 0) : Text(14, 100, 0)};
  margin-right: ${props => props.mr}px;
  color: #666666;
  min-width: 77px;
`;