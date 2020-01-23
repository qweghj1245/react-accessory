import styled from 'styled-components';
import { size, BaseWrapper } from '../../assets/css/global.style';

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export const SmallBlock = styled.div`
  ${size('61px', '61px')};
  background: #72665A;
  margin-bottom: ${props => props.mb}px;
`;

export const LongBlock = styled.div`
  ${size('61px', '151px')};
  background: #EAE8E6;
`;

export const Group = styled(BaseWrapper)`
  margin-right: 20px;
`;