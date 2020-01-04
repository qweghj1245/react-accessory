import styled from 'styled-components';

import { Text, Flex } from '../../../assets/css/global.style';

export const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  padding-right: 91px;
  border-right: solid 1px #E0E0E0;
`;

export const Texture = styled.div`
  ${Text(14, 'normal', 20)};
  color: #999999;
`;

export const TextureBlack = styled.div`
  ${Text(16, 'normal', 30)};
  color: #333333;
`;