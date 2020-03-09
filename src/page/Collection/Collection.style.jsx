import styled from 'styled-components';
import { ImageWrapper, Flex } from '../../assets/css/global.style';

export const Wrapper = styled.div`
  border-top: solid 1px #EAEAEA;
  min-height: calc(100vh - 384px);
`;

export const Image = styled(ImageWrapper)`
  margin-top: 0px;
`;

export const ImageFlex = styled(Flex)`
  height: calc(100vh - 385px);
`;