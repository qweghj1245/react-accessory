import styled from 'styled-components';
import { Flex, size, backgroundImage, absolute, Text, ImageWrapper } from '../../assets/css/global.style';

export const HomeWrapper = styled.div`
  margin-top: 50px;
`;

export const SlideWrapper = styled.div`
  width: 953px;
  margin: 0 auto;
`;

export const BannerImage = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const FlexWrap = styled(Flex)`
  flex-direction: column;
  width: 953px;
  margin: 0 auto;
`

export const Recommend = styled(Flex)`
  width: 100%;
  font-weight: bold;
  font-size: 30px;
  margin-top: 77px;
  &::before, &::after {
    content: '';
    display: block;
    ${size('calc(721px / 2)', '1px')}
    background: #EAEAEA;
    margin-right: 55.5px;
  }
  &::after {
    margin-left: 55.5px;
    margin-right: 0;
  }
`;

export const PopularProductWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 30px;
  width: 100%;
`;

export const AbsoluteWrap = styled.div`
  width: 100%;
`;

export const IntroWrapper = styled(Flex)`
  ${size('100%', '1962px')};
  ${(props) => backgroundImage(props.url)}
  margin-top: 204px;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 120px;
`;

export const Image = styled(ImageWrapper)`
  margin-bottom: ${props => props.mb}px;
`;

export const TypeCardWrapper = styled(PopularProductWrap)`
  margin-top: 0;
  width: 960px;
`;

export const TypeCard = styled.div`
  width: 304px;
  background: #FFFFFF;
  padding: 18px 18px 38px 18px;
  position: relative;
`;

export const TypeCardTitle = styled.div`
  font-size: 16px;
  color: #666666;
  margin-top: 20px;
  text-align: center;
`;

export const TypeCardBall = styled.img`
  width: ${props => props.width}px;
  ${props => absolute(`${props.top}px`, `${props.left}px`)}
`;

export const ShareWrapper = styled(Flex)`
  padding: 120px 0 130px 0;
  position: relative;
`;

export const ShareContent = styled.div`
  background: #EAE8E6;
  padding: 30px 81px 30px 50px;
  ${size('730px', '226px')}
`;

export const ShareTitle = styled.div`
  ${Text(30, 'bold', 10)}
`;

export const ShareMsg = styled.div`
  ${Text(16, 'normal', 23)}
`;

export const Opi = styled.span`
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;