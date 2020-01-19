import styled from 'styled-components';
import { Flex, Text } from '../../../assets/css/global.style';


export const SlideTitle = styled.div`
  ${Text(18, 'bold', 0)};
  color: #72665A;
  margin-bottom: ${props => props.mb}px;
`;

export const Content = styled.div`
  padding-top: 30px;
  padding-left: 5px;
`;

export const FormGroup = styled.div`
  padding-left: 76px;
`;

export const Address = styled(Flex)`
  justify-content: flex-start;
  width: 304px;
`;

export const FlexStart = styled(Flex)`
  justify-content: flex-start;
`;