import styled from 'styled-components';
import * as cal from '../global/colours';
import { HH } from '../global/variables';

export const Header = styled.header`
   display: grid;
   align-content: center;
   justify-content: space-between;
   grid-template-columns: auto auto;
   position: fixed;
   top:0;
   left:0;
   height: ${HH};
   background-color: ${cal.color2};
   width: 100%;
   padding: 10px;
`;

export const LeftBlock = styled.div`
   display: grid;
   grid-template-columns: auto auto;
`;
export const RightBlock = styled.div`
   display: grid;
`;
export const LogoItem = styled.div`
   display: grid;
`;

export const NavItems = styled.div`
   display: flex;
   align-items: center;
   padding: 0 10px;
   a {
      display: flex;
      padding: 0 10px;
   }
`;
