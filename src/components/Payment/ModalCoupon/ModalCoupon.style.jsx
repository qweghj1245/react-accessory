import styled from 'styled-components';
import { size, Flex, Text } from '../../../assets/css/global.style';
import { device } from '../../../assets/css/device';

export const Content = styled(Flex)`
  ${size('428px', '276px')};
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 20px;
  background: #FFFFFF;
  padding-top: 40px;
  padding-bottom: 30px;

  @media ${device.mobile} {
    width: 278px;
  }
`;

export const Inputs = styled.input`
  background: #F4F4F4;
  ${size('232px', '40px')};
  border-radius: 5px;
  border: 0;
  padding-left: 12px;
  font-size: 12px;
  margin-bottom: 10px;
  -webkit-appearance: none;
  &:focus {
    outline: 0;
  }
`;

export const Texture = styled.div`
  ${Text(12, 'normal', 38)};
  color: #BB4444;
`;