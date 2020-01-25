import styled from 'styled-components';
import { Text, size, Flex } from '../../../../assets/css/global.style';

export const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  background: #FFFFFF;
`;

export const Title = styled(Flex)`
  ${Text(16, 100, 11)};
  padding-top: 10px;
  color: #666666;
  margin-bottom: 22px;
  &::before {
    content: '';
    display: block;
    ${size('4px', '24px')};
    background: #86C4E6;
    margin-right: 5px;
  }
`;

export const Texture = styled.div`
  ${Text(12, 100, 22)};
  color: #333333;
`;
