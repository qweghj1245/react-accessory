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
    default:
      return {
        bg: 'rgba(114, 102, 90, .8)',
        color: '#FFFFFF',
        hoverBg: '#9c938b',
      };
  }
}

export const ButtonWrapper = styled.div`
  padding: ${props => props.padding ? props.padding : '8px 28px'};
  font-size: 16px;
  color: ${props => convertColor(props.color).color};
  background: ${props => convertColor(props.color).bg};
  display: inline-block;
  border-radius: 20px;
  cursor: pointer;
  margin-right: ${props => props.mr ? props.mr :null}px;
  &:hover {
    background: ${props => convertColor(props.color).hoverBg};
    color: ${props => convertColor(props.color).hoverTxt};
  }
`;
