import styled from 'styled-components';
import { Flex, size, absolute } from '../../assets/css/global.style';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Inputs = styled(Flex)`
  ${size('150px', '45px')};
  border: solid 1px #666666;
  padding: 13px 15px 12px 10px;
  font-size: 14px;
  justify-content: space-between;
  cursor: pointer;
  color: ${props => !props.realValue && !props.defaultV ? '#999999' : '#333333'};
`;

export const Dropdown = styled.div`
  ${absolute('100%', 0)};
  width: 100%;
  border: solid 1px #666666;
  border-top: 0;
  transform-origin: top;
  transform: ${props => props.isShow ? 'rotateX(0deg)' : 'rotateX(-90deg)'};
  transition: transform .2s linear;
`;

export const DropdownItem = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  background: #FFFFFF;
  &:hover {
    background: #EAE8E6;
  }
`;