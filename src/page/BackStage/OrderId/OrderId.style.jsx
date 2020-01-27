import styled from 'styled-components';
import { Grid, size, Flex, Text, BaseWrapper } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  padding: 11px 50px;
  padding-top: 0;
  background: #F1F1F1;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

export const GridWrapper = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 26px;
  margin-top: 10px;
`;

export const WhiteSpace = styled.div`
  padding: 30px 50px;
  width: 100%;
  background: #FFFFFF;
`;

export const BigTitle = styled(Flex)`
  ${Text(14, 100, 19)};
  padding-bottom: ${props => props.noBorder ? 0 : '12px'};
  border-bottom: ${props => props.noBorder ? 0 : 'solid 1px #F1F1F1'};
  justify-content: flex-start;
  color: #666666;
  &::before {
    content: '';
    display: block;
    ${size('4px', '24px')};
    background: #86C4E6;
    margin-right: 5px;
  }
`;

export const BoldTitle = styled.div`
  ${Text(12, 'bold', 3)};
  color: #333333;
`;

export const SmallTitle = styled.div`
  ${props => Text(12, 100, props.mb ? props.mb : 8)};
  color: ${props => props.blue ? '#0288D1' : '#333333'};
`;

export const Group = styled.div`
  position: relative;
`;

export const Card = styled(Flex)`
  padding-right: 31px;
  margin-bottom: 20px;
`;

export const Circle = styled.div`
  ${size('20px', '20px')};
  border-radius: 50%;
  background: ${props => {
    switch (props.color) {
      case 'red':
        return '#CC6F6F';
      case 'blue':
        return '#143F82';
      default:
        return '#FFFFFF';
    }
  }};
  margin-bottom: 12px;
`;

export const Texture = styled.div`
  align-self: ${props => props.start ? 'flex-start' : 0};
  ${Text(12, 'normal', 0)};
  color: #333333;
  margin-bottom: ${props => props.mb ? props.mb : 12}px;
`;

export const CardWrapper = styled(BaseWrapper)`
  margin-left: 13px;
  margin-right: auto;
`;

export const CardGroup = styled.div`
  border-bottom: solid 1px #F1F1F1;
  margin-bottom: 12px;
`;

export const PriceText = styled(SmallTitle)`
  margin-bottom: 0;
`;