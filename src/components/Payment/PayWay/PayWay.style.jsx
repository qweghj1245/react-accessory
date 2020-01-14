import styled from 'styled-components';
import { Text, Flex } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  position: relative;
  background: #EAE8E6;
  padding: 20px 50px 30px 50px;
  margin-bottom: 30px;
`;

export const Texture = styled.div`
  ${Text(18, 'bold', 20)};
  color: #666666;
  text-align: center;
`;

export const SubText = styled.div`
  ${props => props.mb ? Text(14, 'normal', props.mb) : Text(14, 'normal', 0)};
  color: ${props => props.color === 'greyLight' ? '#999999' : '#666666'};
  margin-right: ${props => props.mr ? 72 : 0}px;
  font-size: ${props => props.fz}px;
`;

export const Between = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const TextBetween = styled(Flex)`
  justify-content: space-between;
  margin-bottom: ${props => props.mb ? 20 : 0}px;
`;

export const UseCoupon = styled.div`
  ${Text(14, 'normal', 0)};
  border: solid 1px #999999;
  padding: 10px;
  background: #FFFFFF;
  color: #999999;
  cursor: pointer;
`;

export const TextGroup = styled.div`
  border-top: solid 1px #999999;
  padding-top: 20px;
`;