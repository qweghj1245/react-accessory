import styled from 'styled-components';
import { Flex } from '../../assets/css/global.style';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 69px;
  margin-bottom: 84px;
`;

export const Flexer = styled(Flex)`
  align-items: flex-start;
`;

export const Left = styled.div`
  position: relative;
  border-top: solid 1px #EAEAEA;
`;

export const Right = styled(Flex)`
  position: relative;
  margin-left: 101px;
  flex-direction: column;
`;