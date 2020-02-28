import styled from 'styled-components';
import { size, absolute } from '../../assets/css/global.style';

export const SelectWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.mt}px;
  margin-right: ${props => props.mr}px;
  margin-bottom: ${props => props.mb}px;
`;

export const Inputs = styled.div`
  ${props => props.width || props.height ? size(props.width, props.height) : size('150px', '45px')};
  border: solid 1px ${props => props.border ? props.border : '#666666'};
  padding: 13px 15px 12px 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${props => !props.realValue && !props.defaultV ? '#999999' : '#333333'};
  white-space: nowrap;
  background: #FFFFFF;
`;

export const Dropdown = styled.div`
  max-height: ${props => props.dropHeight||200}px;
  overflow-y: auto;
  ${absolute('100%', 0)};
  width: calc(100% + 1px);
  border: solid 1px #666666;
  border-top: 0;
  transform-origin: top;
  transform: ${props => props.isShow ? 'rotateX(0deg)' : 'rotateX(-90deg)'};
  transition: transform .2s linear;
  z-index: 10;
  background: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownItem = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  background: #FFFFFF;
  &:hover {
    background: #EEE;
  }
`;

export const Triangle = styled.div`
  ${size(0, 0)};
  border-style: solid;
  border-width: 9px 5.5px 0 5.5px;
  border-color: #333333 transparent transparent transparent;
  margin-left: 10px;
  border-radius: 2px;
  transform: rotate(${props => props.isShow ? 180 : 0}deg);
  transition-duration: .2s;
  transform-origin: center;
`;