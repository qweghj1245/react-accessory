import styled from 'styled-components';
import BaseSelect from '../../../components/BaseSelect/BaseSelect';
import { Text } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  padding: 11px 50px;
  padding-top: 0;
  background: #F1F1F1;
  height: calc(100vh - 60px);
`;

export const Select = styled(BaseSelect)`
  border: 0;
  border-radius: 5px;
  font-size: 12px;
  & > div:nth-child(2) {
    border: solid 1px #333333;
    border-radius: 5px;
    & > div {
      border-radius: 5px;
    }
  }
`;

export const TopTexture = styled.div`
  ${Text(12, 100, 0)};
  color: #999999;
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
`;