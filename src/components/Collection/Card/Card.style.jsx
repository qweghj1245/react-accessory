import styled from 'styled-components';
import { Grid, Text } from '../../../assets/css/global.style';
import { device } from '../../../assets/css/device';

export const Wrapper = styled(Grid)`
  border-bottom: solid 1px #EAEAEA;
  padding: 30px 0;
  grid-template-columns: 170px 231px 258px 164px 1fr;
  align-items: center;
  cursor: pointer;

  @media ${device.mobile} {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
  }
`;

export const Texture = styled.div`
  ${Text(14, 'normal', 0)};
  color: #333333;
`;
