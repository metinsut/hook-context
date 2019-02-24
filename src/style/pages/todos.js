import styled from 'styled-components';

export const TodoRoot = styled.div``;

export const TodoWrapper = styled.div``;
export const TodoContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
`;
export const TodoCount = styled.div`
   padding: 0 10px;
`;
export const TodoCompleted = styled.input`
   padding: 0 10px;
`;
export const TodoName = styled.div`
   padding: 0 10px;
   text-decoration: ${props => props.check ? "line-through" : "none"};
`;
export const TodoDelete = styled.a`
   padding: 0 10px;
   color: red;
`;
export const TodoAdd = styled.div`
   padding: 10px;
`;
export const TodoInput = styled.input`
   margin: 0 10px;
`;
export const TodoSend = styled.button`
   margin: 0 10px;
`;
