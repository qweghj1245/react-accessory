import styled from 'styled-components';
import BaseSelect from '../../../components/BaseSelect/BaseSelect';
import { Flex, size, Text } from '../../../assets/css/global.style';

export const Wrapper = styled.div`
  padding: 11px 50px;
  padding-top: 0;
  background: #F1F1F1;
  height: calc(100vh - 60px);
  overflow-y: auto;
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

export const AddButton = styled(Flex)`
  ${size('64px', '28px')};
  border-radius: 5px;
  background: #0288D1;
  padding: 4px 10px;
  justify-content: space-between;
  cursor: pointer;
`;

export const Texture = styled.div`
  ${Text(14, 100, 0)};
  color: #FFFFFF;
`;