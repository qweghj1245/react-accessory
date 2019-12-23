import styled from 'styled-components';
import { Link } from '@material-ui/core';

export const Wrapper = styled.div`
  width: 953px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 10px;
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