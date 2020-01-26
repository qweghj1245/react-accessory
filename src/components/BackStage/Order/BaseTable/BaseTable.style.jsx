import styled from 'styled-components';

import { size, Grid, Text } from '../../../../assets/css/global.style';

export const Wrapper = styled.div`
  background: #FFFFFF;
  ${size('100%', 'auto')};
  padding: 19px 30px;
`;

export const LineWrapper = styled(Grid)`
  grid-template-columns: minmax(42px, 1fr) minmax(128px, 1fr) minmax(128px, 1fr) minmax(108px, 1fr) minmax(108px, 1fr) minmax(108px, 1fr) minmax(228px, 1fr) minmax(78px, 1fr);
  padding-bottom: 17px;
  border-bottom: solid 1px #F1F1F1;
  padding-top: ${props => props.pt}px;
`;

export const HeadText = styled.div`
  ${Text(12, 100, 0)};
  color: #999999;
`;

export const BodyText = styled.div`
  ${Text(12, 100, 0)};
  color: #333333;
`;

export const StatusText = styled.div`
  ${Text(12, 100, 0)};
  ${size('56px', '18px')};
  background: #FFC333;
  text-align: center;
`;
