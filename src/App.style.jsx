import styled from 'styled-components';
import { device } from './assets/css/device';

export const AppWrapper = styled.div`
  padding-top: ${props => props.location ? '' : '64px'};
  min-width: 960px;
  width: 100%;
  overflow: hidden;

  @media ${device.mobile} {
    min-width: 100%;
  }
`