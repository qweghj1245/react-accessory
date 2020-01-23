import styled from 'styled-components';
import { size, Text } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  ${size('304px', 'auto')};
  background: #EAE8E6;
  margin-bottom: 30px;
`;

export const Top = styled.div`
  padding: 10px 31px 20px 23px;
`;

export const Title = styled.div`
  ${Text(28, 'bold', 10)};
  color: #72665A;
`;

export const Texture = styled.div`
  ${props => Text(14, props.bold ? 'bold' : 'normal', 0)};
  color: #666666;
  word-break: break-all;
`;

export const Divide = styled.div`
  width: 100%;
  height: 1px;
  border: dashed 1px #999999;
`;

export const Bottom = styled.div`
  padding: 20px 0 10px 23px;
  & > div:last-child {
    margin-bottom: 0;
  }
`;

export const BottomGroup = styled.div`
  margin-bottom: 20px;
`;

export const BottomTitle = styled.div`
  ${Text(18, 'bold', 0)};
  color: #666666;
`;

export const BottomTexture = styled.div`
  ${Text(14, 'normal', 0)};
  color: #999999;
`;

export const BackOrderList = styled.div`
  ${Text(12, 'normal', 0)};
  color: #999999;
  text-decoration: underline;
  text-align: center;
  cursor: pointer; 
`;