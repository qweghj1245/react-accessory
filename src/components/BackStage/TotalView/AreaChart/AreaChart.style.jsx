import styled from 'styled-components';
import { Text, size, Flex } from '../../../../assets/css/global.style';

export const Wrapper = styled.div`
  background: #FFFFFF;
  height: 274px;
`;

export const Title = styled(Flex)`
  ${Text(16, 100, 11)};
  padding-left: 30px;
  padding-top: 10px;
  color: #666666;
  &::before {
    content: '';
    display: block;
    ${size('4px', '24px')};
    background: #86C4E6;
    margin-right: 5px;
  }
`;

export const Timing = styled.div`
  border-radius: 6px;
  border: solid 1px #333333;
  display: flex;
  margin-right: 30px;
  margin-top: 10px;
`;

export const Time = styled.div`
  font-size: 14px;
  padding: 3px 5px;
  color: ${props => props.active ? '#FFFFFF' : '#666666'};
  background: ${props => props.active ? '#333333' : '#FFFFFF'};
  border-radius: ${props => {
    if (props.dir==='left') {
      return '6px 0 0 6px';
    } else if (props.dir==='right') {
      return '0 6px 6px 0';
    }
  }};
  cursor: pointer;
`;