import styled from 'styled-components';

export const AppWrapper = styled.div`
  padding-top: ${props => props.location ? '' : '64px'};
  min-width: 960px;
  width: 100%;
  overflow: hidden;
`