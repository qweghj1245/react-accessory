import styled from 'styled-components';
import { Flex } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 69px;
  margin-bottom: 84px;

  @media ${device.mobile} {
    margin-bottom: 60px;
  }
`;

export const Flexer = styled(Flex)`
  align-items: flex-start;
  width: 953px;
  margin: 0 auto;

  @media ${device.mobile} {
    display: block;
    width: 100%;
    padding: 0 21px;
  }
`;

export const Left = styled.div`
  position: relative;
  border-top: ${props => props.noData ? '0' : 'solid 1px #EAEAEA'};
  width: ${props => props.noData ? '50%' : 'auto'};
  min-height: 44.3vh;

  @media ${device.mobile} {
    min-height: 100%;
  }
`;

export const Right = styled(Flex)`
  position: relative;
  margin-left: ${props => props.noData && !props.isDone ? '0px' : '101px'};
  flex-direction: column;

  @media ${device.mobile} {
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const ImageFlexer = styled(Flexer)`
  align-items: center;
  justify-content: center;
  min-height: 45.6vh;

  @media ${device.mobile} {
    min-height: 47.8vh;
    display: flex;
    & > img {
      width: 100%;
    }
  }
  @media ${device.wierdMobile} {
    min-height: 53.7vh;
  }
  @media ${device.pad} {
    min-height: 62.7vh;
  }
`; 