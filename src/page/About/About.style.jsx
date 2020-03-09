import styled from 'styled-components';
import { size, BaseWrapper, Flex, ImageWrapper } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const Wrapper = styled.div`
  margin-bottom: 50px;

  @media ${device.mobile} {
    margin: 0;
  }
`;

export const FlexRow = styled(Flex)`
  @media ${device.mobile} {
    display: block;
  }
`;

export const FlexGrid = styled(Flex)`
  @media ${device.mobile} {
    display: grid;
    grid-gap: 21px;
    margin-right: 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Image = styled(ImageWrapper)`
  @media ${device.mobile} {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const SmallBlock = styled.div`
  ${size('61px', '61px')};
  background: #72665A;
  margin-bottom: ${props => props.mb}px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const LongBlock = styled.div`
  ${size('61px', '151px')};
  background: #EAE8E6;

  @media ${device.mobile} {
    display: none;
  }
`;

export const Group = styled(BaseWrapper)`
  margin-right: 20px;

  @media ${device.mobile} {
    margin-right: 0;
    margin-bottom: 0;
  }
`;