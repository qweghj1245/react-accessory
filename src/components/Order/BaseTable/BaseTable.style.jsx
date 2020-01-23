import styled from 'styled-components';
import { Grid, Text } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  min-height: calc(100vh - 489px);
  margin-bottom: 60px;
`;

export const Head = styled(Grid)`
  grid-template-columns: repeat(4, 196px);
  background: #EAE8E6;
  padding: 10px 80px;
`;

export const HeadText = styled.div`
  ${Text(14, 'normal', 0)};
  color: #333333;
`;

export const Body = styled.div`
  position: relative;
`;

export const Content = styled(Grid)`
  border-bottom: solid 1px #EAEAEA;
  grid-template-columns: 196px 196px 196px 147px 1fr;
  align-items: center;
  padding: 10px 80px;
  transition-duration: .2s;
  &:hover {
    background: #fffbf7;
  }
`;

export const BodyText = styled.div`
  ${Text(14, 'normal', 0)};
  color: #666666;
  margin-right: ${props => props.mr}px;
`;