import styled from 'styled-components';
import { Text, size, BaseWrapper } from '../../assets/css/global.style';

export const Wrapper = styled(BaseWrapper)`
  margin-bottom: ${props => props.mb ? props.mb : 16}px;
`;

export const LabelText = styled.div`
  ${Text(14, 'normal', 4)};
  color: #666666;
`;

export const ReInput = styled.input`
  ${size('304px', '40px')};
  border: solid 1px #999999;
  padding: 10px;
`;