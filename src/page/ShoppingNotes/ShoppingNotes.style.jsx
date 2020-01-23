import styled from 'styled-components';
import { Text } from '../../assets/css/global.style';

export const Wrapper = styled.div`
  border-top: solid 1px #EAEAEA;
  padding-top: 51px;
  padding-bottom: 115px;
`;

export const Group = styled.div`
  margin-bottom: ${props => props.mb}px;
  margin-right: ${props => props.mr}px;
`;

export const Texture = styled.div`
  ${Text(14, 100, 0)};
  color: #666666;
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  margin-bottom: ${props => props.mb}px;
  text-indent: ${props => props.indent ? '1.4em': ''};
`;

export const Title = styled.div`
  ${Text(20, 500, 22)};
  color: #333333;
`;

export const SubTitle = styled.div`
  ${Text(12, 'normal', 0)};
  color: #999999;
  text-indent: 1.6em;
`;

export const Content = styled.div`
  margin-left: 162px;
`;