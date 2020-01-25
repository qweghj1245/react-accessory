import styled from 'styled-components';
import { size, Flex, Text, ImageWrapper } from '../../../../assets/css/global.style';

export const Wrapper = styled.div`
  ${size('100%', '120px')};
  background: #FFFFFF;
  display: flex;
  padding-left: 45px;
`;

export const Left = styled(Flex)`
  padding-top: 21px;
  margin-right: ${props => `${props.mr}px`};
  width: 62%;
`;

export const Texture = styled.div`
  ${Text(14, 100, 13)};
  color: #666666;
  white-space: nowrap;
`;

export const Number = styled.div`
  ${Text(30, 'bold', 0)};
  color: #333333;
`;

export const Image = styled(ImageWrapper)`
  align-self: flex-end;
`;