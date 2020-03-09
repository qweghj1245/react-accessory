import styled from 'styled-components';
import { Text, size, BaseWrapper } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

export const Wrapper = styled(BaseWrapper)`
  margin-bottom: ${props => props.mb ? props.mb : 16}px;
  margin-right: ${props => props.mr}px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const LabelText = styled.div`
  ${Text(14, 'normal', 4)};
  color: #666666;
  margin-right: ${props => props.mr}px;
`;

export const Error = styled.div`
  ${Text(12, 'normal', 4)};
  color: #ef0f0f;
`;

export const ReInput = styled.input`
  ${props => props.width || props.height ? size(props.width, props.height) : size('304px', '40px')};
  border: solid 1px #999999;
  padding: 10px;
  font-size: 14px;
  -webkit-appearance: none;
  &::-webkit-input-placeholder {
    color: #999999;
  }
  &:focus {
    outline: 0;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;