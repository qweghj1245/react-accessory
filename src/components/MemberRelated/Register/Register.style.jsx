import styled from 'styled-components';
import { device } from '../../../assets/css/device';
import { Flex, Text } from '../../../assets/css/global.style';

export const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  margin-left: 91px;

  @media ${device.mobile} {
    margin: 0;
    margin-top: 16px;
    width: calc(100% - 42px);
  }
`;


export const Login = styled.div`
  ${Text(14, 'normal', 0)};
  color: #999999;
  margin-top: 20px;
`;