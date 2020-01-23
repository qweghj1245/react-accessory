import styled from 'styled-components';
import { Flex, Text } from '../../assets/css/global.style';

export const Flexs = styled(Flex)`
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 98px;
`;

export const Texture = styled.div`
  ${Text(12, 'normal', 0)};
  color: #999999;
  text-decoration: underline;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;