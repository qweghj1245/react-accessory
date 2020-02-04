import styled from 'styled-components';

import { size, Grid, Text } from '../../../../assets/css/global.style';

export const Wrapper = styled.div`
  background: #FFFFFF;
  ${size('100%', 'auto')};
  padding: 19px 50px;
  margin-top: 20px;
`;

export const LineWrapper = styled(Grid)`
  grid-template-columns: 42px minmax(124px, 1fr) minmax(124px, 1fr) minmax(128px, 1fr) minmax(128px, 1fr) minmax(142px, 1fr) minmax(104px, 1fr) minmax(114px, 1fr);
  padding-bottom: 17px;
  border-bottom: solid 1px #F1F1F1;
  align-items: center;
  justify-items: flex-start;
  padding-top: ${props => props.pt}px;
  cursor: pointer;
  &:hover {
    background: ${props => props.head ? '' : '#CCCCCC'};
  }
`;

export const HeadText = styled.div`
  ${Text(12, 100, 0)};
  color: #999999;
`;

export const BodyText = styled.div`
  ${Text(12, 100, 0)};
  color: #333333;
`;
