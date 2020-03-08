import styled from 'styled-components';
import { Flex, Text, size, BaseWrapper } from '../../../assets/css/global.style';
import { device } from '../../../assets/css/device';

export const Slider = styled(Flex)`
  width: 547px;
  padding: 9px 11px 10px 5px;
  justify-content: space-between;
  background: #EAE8E6;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SlideTitle = styled.div`
  ${Text(18, 'bold', 0)};
  color: #72665A;
  margin-bottom: ${props => props.mb}px;
`;

export const NoticeFlex = styled(Flex)`
  cursor: pointer;
`;

export const SlideNotice = styled.div`
  ${Text(14, 'normal', 0)};
  color: #999999;
  margin-right: 4px;
`;

export const Card = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: solid 1px rgba(51, 51, 51, .1);
  padding-right: 31px;

  @media ${device.mobile} {
    padding-right: 0;
  }
`;

export const Circle = styled.div`
  ${size('20px', '20px')};
  border-radius: 50%;
  background: ${props => props.color};
  display: ${props => props.color ? 'block' : 'none'};
  margin-bottom: 10px;
`;

export const Texture = styled.div`
  ${Text(14, 'normal', 0)};
  color: #666666;
  margin-bottom: ${props => props.mb ? props.mb : 10}px;
  margin-left: ${props => props.ml}px;
`;

export const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: auto;

  @media ${device.mobile} {
    margin-left: 12px;
  }
`;

export const WrapperDivide = styled(BaseWrapper)`
  height: 0;
  overflow: hidden;
`;