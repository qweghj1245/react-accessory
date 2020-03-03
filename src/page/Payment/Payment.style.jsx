import styled from 'styled-components';
import { Flex } from '../../assets/css/global.style';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 69px;
  margin-bottom: 84px;
`;

export const Flexer = styled(Flex)`
  align-items: flex-start;
  width: 953px;
  justify-content: ${props => props.noData ? 'space-between' : 'center'};
  margin: 0 auto;
`;

export const Left = styled.div`
  position: relative;
  border-top: ${props => props.noData ? '0' : 'solid 1px #EAEAEA'};
  width: ${props => props.noData ? '50%' : 'auto'};
  min-height: 44.3vh;
  ${props => 
    props.noData ? `
      display: flex;
      justify-content: center;
      align-items: center;
    ` : null
  };
`;

export const Right = styled(Flex)`
  position: relative;
  margin-left: ${props => props.noData ? '0px' : '101px'};
  flex-direction: column;
`;