import styled from 'styled-components';
import { device } from '../../assets/css/device';
import { Flex } from '../../assets/css/global.style';

export const Wrapper = styled(Flex)`
  padding-top: 100px;
  padding-bottom: 154px;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 70px 0;
  }
`;