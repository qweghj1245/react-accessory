import styled, { css } from 'styled-components';

// css

export const absoluteCss = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

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

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: ${props => props.mb}px;
  position: relative;
  &:before {
    content: '';
    display: block;
    ${absoluteCss}
    width: ${props => props.width}px;
    top: 60%;
    height: 18px;
    background: #EAE8E6;
    z-index: -1;
  }
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