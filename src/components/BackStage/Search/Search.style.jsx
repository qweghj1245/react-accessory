import styled from 'styled-components';
import { Icon } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background: #FFFFFF;
  border-radius: 5px;
  padding: 6px 9.5px 6px 11px;
  font-size: 12px;
  border: 0;
  width: ${props => props.width}px;
  margin-right: ${props => props.mr}px;
  &:focus {
    outline: 0;
  }
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  right: 29.5px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
`;
