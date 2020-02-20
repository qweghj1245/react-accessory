import styled from 'styled-components';
import { Grid, Flex, Text } from '../../assets/css/global.style';

export const FlexWrapper = styled(Flex)`
  padding: 50px 0 132px 0;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width}px;
  margin-left: ${props => props.ml}px;
`;

export const ImageGroup = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 27px;
  width: 384px;
  margin-top: 20px;
`;

export const Image = styled.img`
  width: ${props => props.width}%;
  height: 110px;
  margin-bottom: ${props => props.mb}px;
  margin-right: ${props => props.mr}px;
`;

export const Title = styled.div`
  ${Text(30, 'bold', 15)};
  color: #333333;
`;
export const Price = styled.div`
  ${Text(30, 'bold', 20)};
  color: #ECDDC3;
`;
export const Msg = styled.div`
  ${Text(14, 'normal', 30)};
  color: #333333;
`;

export const NormalText = styled.div`
  ${Text(14, 'normal', 0)};
  color: #333333;
  margin-right: ${props => props.ml ? props.ml : 30}px;
`;

export const Group = styled(Flex)`
  justify-content: flex-start;
  margin-bottom: ${props => props.mb ? props.mb : 0}px;
`;
