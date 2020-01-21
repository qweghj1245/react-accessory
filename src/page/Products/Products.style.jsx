import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const Pagination = styled.div`
  display: grid;
  grid-template-columns: 10px 10px 10px;
  grid-gap: 20px;
  justify-content: center;
  font-size: 16px;
`;

export const Page = styled.div`
  color: ${props => props.isActive ? '#72665A' : '#999999'};
  cursor: pointer;
  margin-bottom: 90px;
  margin-top: 60px;
`;