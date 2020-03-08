import styled from 'styled-components';
import { Text, Flex } from '../../../assets/css/global.style';
import { device } from '../../../assets/css/device';

export const Wrapper = styled.div`
  position: relative;
  background: #EAE8E6;
  padding: 20px 50px 30px 50px;
  margin-bottom: 30px;

  @media ${device.mobile} {
    width: 100%;
    padding: 20px 37px;
  }
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

  @media ${device.mobile} {
    width: 102px;
    margin-right: 0;
  }
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

  @media ${device.mobile} {
    width: 96px;
  }
`;

export const TextGroup = styled.div`
  border-top: solid 1px #999999;
  padding-top: 20px;
`;

export const LastStep = styled.div`
  ${Text(12, 'normal', 0)};
  color: #999999;
  text-decoration: underline;
  cursor: pointer;
`;