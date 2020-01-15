import styled from 'styled-components';
import { absolute } from '../../assets/css/global.style';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(51, 51, 51, .6);
  z-index: 999;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition-duration: .2s;
`;

export const Content = styled.div`
  ${absolute('50%', '50%', '-50%', '-50%')};
`;