import styled from 'styled-components';
import { Flex, size, Text } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const Wrapper = styled(Flex)`
  flex-direction: column;
  height: calc(100vh - 405px);

  @media ${device.mobile} {
    margin-bottom: 50px;
    height: calc(100vh - 146px);
  }
`;

export const Head = styled.div`
  background: ${props => props.url ? `url('${props.url}')` : '#EAE8E6'};
  background-size: cover;
  border-radius: 50%;
  ${size('100px', '100px')};
  margin-bottom: 50px;
  position: relative;
`;

export const Group = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;

export const GroupItem = styled(Flex)`
  justify-content: flex-start;
  margin-bottom: ${props => props.mb ? props.mb : 20}px;
`;

export const TextTitle = styled.div`
  ${Text(16, 'normal', 0)};
  color: #333333;
  margin-right: 30px;
  width: 64px;
`;

export const TextContent = styled.div`
  ${Text(16, 'normal', 0)};
  color: #666666;
`;