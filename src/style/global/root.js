import { createGlobalStyle } from 'styled-components';
import * as cal from './colours';
import LatoRegular from './fonts/Lato/Lato-Regular.ttf';

const Root = createGlobalStyle`
   *{
      padding:0;
      margin:0;
      box-sizing:border-box;
      font-family:Lato;
   }
   @font-face {
     font-family: Lato;
     src: url(${LatoRegular});
  }
   html {
      font-size:10px;
      color:${cal.color1};
   }
   p {
      font-size:1.6rem;
      color:${cal.color1};
   }
   a {
      text-decoration: none;
      cursor: pointer;
   }
   input[type='text'] {
      width:200px;
      border-radius:3px;
      border:1px solid ${cal.color1};
   }
   input[type='checkbox'] {
         
   }
`;

export default Root;
