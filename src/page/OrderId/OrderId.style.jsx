import styled from 'styled-components';
import { Flex, Text, BaseWrapper } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const Flexs = styled(Flex)`
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 98px;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

export const Texture = styled.div`
  ${Text(12, 'normal', 0)};
  color: #999999;
  text-decoration: underline;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const Wrapper = styled(BaseWrapper)`
  @media ${device.mobile} {
    width: 100%;
    margin-bottom: ${props => `${props.mb}px`};
    & > div {
      width: 100%;
    }
  }
`;