import styled from 'styled-components';
import { Flex } from '../../../assets/css/global.style';
import { device } from '../../../assets/css/device';

export const FlexWrapper = styled(Flex)`
  @media ${device.mobile} {
    display: block;
    padding: 0 21px;
  }
`;