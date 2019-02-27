import styled from 'styled-components';

export const SearchBar = styled.div``;

export const CardWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-gap: 15px;
`;

export const CardContainer = styled.div``;

export const CardItem = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
`;
export const CardImage = styled.div`
   grid-column: 1/-1;
   grid-row: 1/-1;
`;
export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;
export const CardTitle = styled.div`
   grid-column: 1/3;
   grid-row: 1/3;
   padding:10px;
`;
