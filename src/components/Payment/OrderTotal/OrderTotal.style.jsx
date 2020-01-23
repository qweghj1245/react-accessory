import styled from 'styled-components';
import { Flex, Text } from '../../../assets/css/global.style';

export const PriceWrapper = styled.div`
  padding: 10px 0 10px 150px;
`;

export const Between = styled(Flex)`
  justify-content: space-between;
`;

export const Texture = styled.div`
  ${props => props.fz ? Text(props.fz, 'normal', 0) : Text(14, 'normal', 0)};
  color: ${props => props.color ? props.color : '#999999'};
  font-weight: ${props => props.mode === 'order' ? 'normal' : 'bold'};
`;