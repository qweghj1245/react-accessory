import styled from 'styled-components';
import { Text } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  width: 304px;
  background: #EAE8E6;
  padding: 10px 0 30px 25px;
`;

export const Title = styled.div`
  ${Text(18, 'bold', 0)};
  color: #666666;
`;

export const Texture = styled.div`
  ${Text(14, 'normal', 0)};
  color: #999999;
`;

export const Group = styled.div`
  margin-bottom: 20px;
`;