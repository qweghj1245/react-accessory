import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => {
    switch (props.type) {
      case 'error':
        return '#fc4646';
      case 'success':
        return 'green';
      default:
        return 'white';
    }
  }};
  background: ${props => {
    switch (props.type) {
      case 'error':
        return '#fec7c7';
      case 'success':
        return '#b5f2ca';
      default:
        return 'white';
    }
  }};
  padding: 8px 64px;
  border-radius: 4px;
  text-align: center;
  position: relative;
`;

export const Close = styled.div`
  position: absolute;
  right: 32px;
  font-size: 16px;
  color: white;
  top: 16px;
`;