import styled, { css } from 'styled-components';
import { absolute, Text, size } from '../../assets/css/global.style';

const hidden = css`
  visibility: hidden;
  opacity: 0;
`

const show = css`
  visibility: visible;
  opacity: 1;
`

export const Wrapper = styled.div`
  ${props => props.showDropdown ? show : hidden};
  transition-duration: .2s;
`;

export const Dropdown = styled.div`
  width: 96px;
  background: #F1F1F1;
  ${absolute('120%', '50%')}
  translateX(-50%);
  border-radius: 5px;
  padding: 0 10px;
  transition-duration: .2s;
  &::before {
    content: '';
    display: block;
    ${absolute('-10px','50%')};
    ${size(0,0)};
    border-style: solid;
    border-width: 0 7.5px 10px 7.5px;
    border-color: transparent transparent #F1F1F1 transparent;
    transform: translateX(-50%);
  }
`;

export const DropdownItem = styled.div`
  ${Text(14, null, 0)};
  color: #333333; 
  text-align: center;
  line-height: normal;
  padding: 8px;
  border-bottom: ${props => props.noBorder ? 0 : 'solid 1px #999999'};
`;