import styled from 'styled-components';
import { size, Flex, Text, absolute } from '../../../assets/css/global.style';
import BaseSelect from '../../../components/BaseSelect/BaseSelect';

export const Wrapper = styled.div`
  padding: 11px 50px;
  padding-top: 0;
  background: #F1F1F1;
  height: calc(100vh - 60px);
`;

export const TotalPeople = styled(Flex)`
  ${size('60px', '28px')};
  justify-content: space-between;
  padding: 10px 13px 10px 9px;
  border-radius: 5px;
  background: #FFFFFF;
  position: relative;
  &:hover {
    &::before {
      display: block;
    }
    &::after {
      display: block;
    }
  }
  &::before {
    content: '會員人數';
    display: none;
    box-sizing: border-box;
    ${absolute('calc(100% + 9px)', '-8px')};
    ${size('76px', '29px')};
    border-radius: 5px;
    background: #333333;
    padding: 4px 10px;
    ${Text(14, 100, 0)};
    color: #FFFFFF;
  }
  &::after {
    content: '';
    display: none;
    ${absolute('calc(100%)', '50%')};
    transform: translateX(-50%);
    ${size('0px', '0px')};
    border-style: solid;
    border-width: 0 7.5px 10px 7.5px;
    border-color: transparent transparent #333333 transparent;
  }
`;

export const Texture = styled.div`
  ${Text(12, 100, 0)};
  color: #333333;
`;

export const TopTexture = styled.div`
  ${Text(12, 100, 0)};
  color: #999999;
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
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