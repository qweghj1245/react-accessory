import styled from 'styled-components';
import { Text } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  width: 304px;
`;

export const Title = styled.div`
  ${Text(18, 'bold', 20)};
  color: #333333;
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;