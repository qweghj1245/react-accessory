import styled from 'styled-components';

const convertColor = (color) => {
  switch (color) {
    case 'brown':
      return {
        bg: 'rgba(114, 102, 90, .8)',
        color: '#FFFFFF',
        hoverBg: '#9c938b',
      };
    case 'light-brown':
      return {
        bg: '#EAE8E6',
        color: '#72665A',
        hoverBg: '#72665A',
        hoverTxt: '#FFFFFF',
      };
    case 'brown-yellow':
      return {
        bg: '#ECDDC3',
        color: '#72665A',
        hoverBg: '#72665A',
        hoverTxt: '#FFFFFF',
      };
    case 'grey':
      return {
        bg: '#CCCCCC',
        color: '#666666',
        hoverBg: '#333333',
        hoverTxt: '#FFFFFF',
      };
    case 'light-grey-text-black':
      return {
        bg: '#F1F1F1',
        color: '#333333',
        hoverBg: '#999999',
        hoverTxt: '#FFFFFF',
      };
    case 'light-grey-text-red':
      return {
        bg: '#F1F1F1',
        color: '#AE1E1E',
        hoverBg: '#AE1E1E',
        hoverTxt: '#FFFFFF',
      };
    default:
      return {
        bg: 'rgba(114, 102, 90, .8)',
        color: '#FFFFFF',
        hoverBg: '#9c938b',
      };
  }
}

export const ButtonWrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: ${props => props.padding ? props.padding : '8px 28px'};
  font-size: ${props => props.fz ? props.fz : 16}px;
  color: ${props => convertColor(props.color).color};
  background: ${props => convertColor(props.color).bg};
  display: inline-block;
  border-radius: 24px;
  cursor: pointer;
  margin-right: ${props => props.mr ? props.mr : null}px;
  margin-top: ${props => props.mt ? props.mt : null}px;
  margin-bottom: ${props => props.mb ? props.mb : null}px;
  &:hover {
    background: ${props => convertColor(props.color).hoverBg};
    color: ${props => convertColor(props.color).hoverTxt};
  }
`;
