import styled from 'styled-components';

import { Grid } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  background: #F1F1F1;
  padding: 0 54px 50px 50px;
`;

export const TotalWrapper = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 11px;
  margin-bottom: 20px;  
`;

export const ChartWrapper = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  margin-bottom: 20px;
`;

export const BottomWrapper = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`;