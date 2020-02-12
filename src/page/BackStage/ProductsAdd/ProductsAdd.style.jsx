import styled from 'styled-components';
import { Flex, Text, Grid } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  padding: 11px 50px;
  padding-top: 0;
  background: #F1F1F1;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

export const TabWrapper = styled(Grid)`
  grid-template-columns: 104px 1fr;
  margin-top: 10px;
  width: 100%;
`;

export const Tab = styled(Flex)`
  padding: 9px 19px;
  ${Text(16, 100, 0)};
  color: #333333;
  background: ${props => props.active ? '#FFFFFF' : '#FCFCFC'};
  border: ${props => props.active ? 'solid 1px #f1f1f1' : null};
  border-bottom: ${props => props.active ? 0 : 'solid 1px #f1f1f1'};
  border-left: 0;
  cursor: pointer;
`;

export const TabLong = styled(Flex)`
  padding: 9px 19px;
  ${Text(16, 100, 0)};
  color: #333333;
  background: ${props => props.active ? '#FFFFFF' : '#FCFCFC'};
  border: ${props => props.active ? 'solid 1px #f1f1f1' : null};
  border-bottom: ${props => props.active ? 0 : 'solid 1px #f1f1f1'};
  border-right: 0;
  cursor: pointer;
`;