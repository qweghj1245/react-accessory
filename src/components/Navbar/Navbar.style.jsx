import styled from 'styled-components';
import { Flex } from '../../assets/css/global.style';

export const Wrapper = styled(Flex)`
  padding: 12px 50px 12px 20px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 960px;
  width: 100%;
  background: #ffffff;
  z-index: 10;
`;

export const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ListContent = styled.div`
  text-decoration: none;
  font-size: 16px;
  margin-right: ${props => props.mr}px;
  cursor: pointer;
  position: relative;
  height: 40px;
  line-height: 40px;
  display: block;
  width: 64px;
  &:hover {
    & > div > div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const FeatureIcons = styled.div`
  display: flex;
`;

export const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;  
  height: 40px;
`;