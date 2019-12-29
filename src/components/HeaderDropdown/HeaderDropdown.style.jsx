import styled from 'styled-components';
import { absolute, Text } from '../../assets/css/global.style';

export const Dropdown = styled.div`
  width: 116px;
  background: #333333;
  ${absolute('100%', '50%')}
  translateX(-50%);
  border-radius: 5px;
  padding-top: 20px;
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
  ${Text(14, null, 20)};
  color: #FFFFFF;
  text-align: center;
  line-height: normal;
`;