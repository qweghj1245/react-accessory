import styled from 'styled-components';
import { Flex } from '../../assets/css/global.style';
import { device } from '../../assets/css/device';

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

  @media ${device.mobile} {
    padding: 5px 28px;
    min-width: 100%;
  }
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

  @media ${device.mobile} {
    display: none;
  }
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

  @media ${device.mobile} {
    & > img {
      margin-right: 0;
    }
    & > img:not(:first-child) {
      display: none;
    }
    & > div:not(:first-child) {
      display: none;
    }
  }
`;

export const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;  
  height: 40px;
`;

export const Hamburger = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
    width: 21px;
    height: 2px;
    border-radius: 20px;
    background: #333333;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 21px;
      height: 2px;
      position: absolute;
      top: -7px;
      left: 0;
      background: #333333;
    }
    &::after {
      content: '';
      display: block;
      width: 21px;
      height: 2px;
      position: absolute;
      top: 7px;
      left: 0;
      background: #333333;
    }
  }
`;