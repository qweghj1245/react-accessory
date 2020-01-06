import styled from 'styled-components';
import { size, Flex, absolute, Text } from '../../../assets/css/global.style';

export const Group = styled.div`
  position: relative;
`;

export const Dropdown = styled.div`
  background: #333333;
  ${props => props.left ? absolute('77%', props.left) : absolute('77%', '-26%')};
  border-radius: 5px;
  padding: 4px 10px;
  opacity: 0;
  visibility: hidden;
  transition-duration: .2s;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 10px 7.5px;
    border-color: transparent transparent #333333 transparent;
    transform: translateX(-50%);
  }
`;

export const DropdownItem = styled.div`
  ${Text(14, null, 0)};
  color: #FFFFFF;
  text-align: center;
  line-height: normal;
`;

export const StepWrapper = styled(Flex)`
  ${size('80px', '80px')};
  margin-bottom: 50px;
  border-radius: 50%;
  background: ${props => props.isActive ? '#EAE8E6' : '#FCFCFC'};
  margin-right: ${props => props.mr ? props.mr : 100}px;
  &:hover + ${Dropdown} {
    visibility: visible;
    opacity: 1;
  }
`;