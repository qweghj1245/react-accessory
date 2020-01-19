import styled from 'styled-components';
import { Flex, Text } from '../../../assets/css/global.style';

export const Slider = styled(Flex)`
  width: 547px;
  padding: 9px 11px 10px 5px;
  justify-content: space-between;
  background: #EAE8E6;
`;

export const SlideTitle = styled.div`
  ${Text(18, 'bold', 0)};
  color: #72665A;
  margin-bottom: ${props => props.mb}px;
`;

export const NoticeFlex = styled(Flex)`
  cursor: pointer;
`;

export const SlideNotice = styled.div`
  ${Text(14, 'normal', 0)};
  color: #999999;
  margin-right: 4px;
`;