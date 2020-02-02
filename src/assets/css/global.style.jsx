import styled, { css } from 'styled-components';

// css

export const absoluteCss = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// components
export const BaseWrapper = styled.div`
  position: relative;
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  margin-bottom: ${props => props.mb}px;
  margin-top: ${props => props.mt}px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${props => {
    switch (props.align) {
      case 'center':
        return 'center';
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      default:
        return 'center';
    }
  }};
  justify-content: ${props => {
    switch (props.justify) {
      case 'center':
        return 'center';
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'between':
        return 'space-between';
      default:
        return 'center';
    }
  }};
  flex-direction: ${props => props.dir};
  margin-right: ${props => props.mr}px;
  margin-left: ${props => props.ml}px;
  margin-bottom: ${props => props.mb}px;
  margin-top: ${props => props.mt}px;
`;

export const Grid = styled.div`
  display: grid;
`;

export const ImageWrapper = styled.img`
  width: ${props => props.width}px;
  margin-bottom: ${props => props.mb}px;
  margin-right: ${props => props.mr}px;
`;

export const Icon = styled.img`
  width: ${props => props.width ? props.width : '24'}px;
  height: ${props => props.height}px;
  margin-right: ${props => props.mr}px;
  cursor: pointer;
  position: relative;
`;

export const Title = styled.div`
  font-size: ${props => props.fz ? props.fz : 30}px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: ${props => props.mb}px;
  position: relative;
  z-index: 3;
  &:before {
    content: '';
    display: block;
    ${absoluteCss}
    width: ${props => props.width}px;
    top: 77%;
    height: ${props => props.height ? props.height : 18}px;
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