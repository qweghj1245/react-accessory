import styled from 'styled-components';
import { Flex, Text } from '../../assets/css/global.style';

export const FooterWrapper = styled(Flex)`
  flex-direction: column;
  background: #72665A;
  padding-top: 48px;
  padding-bottom: 68px;
`;

export const TopTextWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

export const TopText = styled.div`
  ${Text(14, 'normal', 0)}
  margin-right: ${props => props.mr}px;
  color: #CCCCCC;
  cursor: pointer;
`;