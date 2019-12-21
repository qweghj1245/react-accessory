import styled from 'styled-components';

// components
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.img`
  width: ${props => props.width}px;
`;

export const Icon = styled.img`
  width: ${props => props.width ? props.width : '24'}px;
  margin-right: ${props => props.mr}px;
  cursor: pointer;
`;

// func
export const size = (width, height) => `
  width: ${width};
  height: ${height};
`;

export const backgroundImage = (url) => `
  background-image: url(${url});
  background-size: cover;
`;

export const absolute = (top, left, translateX, translateY) => `
  position: absolute;
  left: ${left};
  top: ${top};
  transform: ${translateX || translateY ? `translate(${translateX}, ${translateY})` : ''}
`;

export const Text = (fz, fw, mb) => `
  font-size: ${fz}px;
  font-weight: ${fw};
  margin-bottom: ${mb}px;
`;