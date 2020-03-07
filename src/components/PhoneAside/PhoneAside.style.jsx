import styled from 'styled-components';
import { size, Text, Flex } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const Wrapper = styled.div`
  position: fixed;
  left: -400px;
  top: 0;
  z-index: 11;
  display: none;

  @media ${device.mobile} {
    display: flex;
  }
`;

export const Left = styled(Flex)`
  ${size('calc(100vw - 44px)', '100vh')};
  justify-content: flex-start;
  flex-direction: column;
  background: #EAE8E6;
  padding-top: 30px;
`;

export const Right = styled(Flex)`
  ${size('44px', '50px')};
  background: #FFFFFF;
`;

export const Head = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  ${Text(12, 'normal', 22)};
  color: #72665A;
`;

export const Section = styled.div`
  ${Text(14, 'bold', 24)};
  color: #72665A;
  width: 67px;
  text-align: left;
`;

export const Type = styled.div`
  ${Text(14, 'normal', 24)};
  color: #72665A;
  text-indent: 1em;
`;