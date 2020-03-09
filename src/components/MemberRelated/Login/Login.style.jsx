import styled from 'styled-components';
import { device } from '../../../assets/css/device';
import { Text, Flex } from '../../../assets/css/global.style';

export const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  padding-right: 91px;
  border-right: solid 1px #E0E0E0;

  @media ${device.mobile} {
    padding: 0;
    border: 0;
    width: calc(100% - 42px);
  }
`;

export const Texture = styled.div`
  ${Text(14, 'normal', 20)};
  color: #999999;
`;

export const TextureBlack = styled.div`
  ${Text(16, 'normal', 30)};
  color: #333333;
`;

export const Register = styled.div`
  ${Text(14, 'normal', 0)};
  color: #999999;
  margin-top: 20px;
`;