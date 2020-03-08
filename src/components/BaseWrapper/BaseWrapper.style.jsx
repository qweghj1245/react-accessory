import styled from 'styled-components';
import { Link } from '@material-ui/core';
import { device } from '../../assets/css/device';

export const Wrapper = styled.div`
  width: 953px;
  min-height: calc(100vh - 266px);
  margin: 0 auto;
  margin-top: 69px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const LinkHandle = styled(Link)`
  && {
    font-size: 14px;
    color: #666666;
    &:hover {
      text-decoration: none;
    }
  }
`;