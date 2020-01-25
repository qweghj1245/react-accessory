import styled from 'styled-components';
import { Flex, size, Text, ImageWrapper } from '../../../assets/css/global.style';

export const Image = styled(ImageWrapper)`
  cursor: pointer;
`;

export const Wrapper = styled(Flex)`
  ${props => size('250px', props.height)};
  min-width: 150px;
  background: #333333;
  padding-top: 50px;
`;

export const LogoTitle = styled.div`
  ${(Text(14, 100, 10))};
  color: #FFFFFF;
`;

export const MenuItem = styled(Flex)`
  width: 100%;
  padding: 11px 0 10px 21px;
  justify-content: flex-start;
  cursor: pointer;
  background: ${props => props.active ? 'rgba(255, 255, 255, .1)' : ''};
  &:hover {
    background: rgba(255, 255, 255, .1);
  }
`;

export const MenuText = styled.div`
  ${(Text(14, 100, 0))};
  color: #BBBBBB;
`;