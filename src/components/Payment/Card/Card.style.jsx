import styled from 'styled-components';
import { Flex, size, Text } from '../../../assets/css/global.style';

export const Wrapper =  styled(Flex)`
  justify-content: space-between;
  width: 546px;
  border-bottom: solid 1px #EAEAEA;
  padding: 30px 0;
`

export const Flexer = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  height: 100%;
`;

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 76px;
`;

export const Circle = styled.div`
  ${size('20px', '20px')};
  border-radius: 50%;
  background: ${props => props.color};
  margin-bottom: 30px;
  margin-right: ${props => props.mr}px;
`;

export const Texture = styled.div`
  ${props => {
    const mb = props.mb ? props.mb : 0;
    return Text('14px', 'normal', `${mb}`);
  }};
  color: #666666;
`;