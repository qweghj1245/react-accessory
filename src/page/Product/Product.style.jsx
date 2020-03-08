import styled from 'styled-components';
import { Grid, Flex, Text, ImageWrapper } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const FlexWrapper = styled(Flex)`
  padding: 50px 0 132px 0;
  align-items: flex-start;

  @media ${device.mobile} {
    display: block;
    padding-top: 20px;
    padding-bottom: 0;
    padding-left: 21px;
    padding-right: 21px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width}px;
  margin-left: ${props => props.ml}px;

  @media ${device.mobile} {
    width: 100%;
    margin-left: 0;
  }
`;

export const ProductImage = styled(ImageWrapper)`
  width: 385px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ImageGroup = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 27px;
  width: 384px;
  margin-top: 20px;

  @media ${device.mobile} {
    width: 100%;
    grid-gap: 10px;
    margin-top: 14px;
  }
`;

export const Image = styled.img`
  width: ${props => props.width}%;
  height: ${props => props.height}px;
  margin-bottom: ${props => props.mb}px;
  margin-right: ${props => props.mr}px;
`;

export const Title = styled.div`
  ${Text(30, 'bold', 15)};
  color: #333333;

  @media ${device.mobile} {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const Price = styled.div`
  ${Text(30, 'bold', 20)};
  color: #ECDDC3;

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const Msg = styled.div`
  ${Text(14, 'normal', 30)};
  color: #333333;

  @media ${device.mobile} {
    font-size: 12px;
    margin-bottom: 36px;
  }
`;

export const NormalText = styled.div`
  ${Text(14, 'normal', 0)};
  color: #333333;
  margin-right: ${props => props.ml ? props.ml : 30}px;
`;

export const Group = styled(Flex)`
  margin-bottom: ${props => props.mb ? props.mb : 0}px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;
