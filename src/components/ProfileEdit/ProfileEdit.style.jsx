import styled from 'styled-components';
import { Flex, size, Icon, Text } from '../../assets/css/global.style';

export const Wrapper = styled(Flex)`
  flex-direction: column;
  margin-bottom: 134px;
  margin-top: -20px;
`;

export const Wrap = styled(Flex)`
  position: relative;
`;

export const Head = styled.div`
  background: ${props => props.url ? `url('${props.url}')` : '#EAE8E6'};
  background-size: cover;
  border-radius: 50%;
  ${size('100px', '100px')};
  margin-bottom: 36px;
  position: relative;
  & > input {
    width: 125px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
  }
`;

export const HeadSetting = styled(Icon)`
  position: absolute;
  bottom: 0;
  left: 100%;
`;

export const Address = styled(Flex)`
  justify-content: flex-start;
  width: 304px;
`;

export const Divide = styled(Flex)`
  ${size('100%', '1px')};
  background: #EAEAEA;
  margin: 30px 0;
`;

export const Texture = styled.div`
  ${Text(18, 'bold', 0)};
  color: #72665A;
  position: absolute;
  right: 100%;
  top: 0;
  width: 100%;
  text-align: right;
  padding-right: 30px;
`;
