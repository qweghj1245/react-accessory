import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  margin-left: 150px;
`;

export const ListContent = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  margin-right: ${props => props.mr}px;
  cursor: pointer;
`;

export const FeatureIcons = styled.div`
  display: flex;
`;