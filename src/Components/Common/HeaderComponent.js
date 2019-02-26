import React from 'react';
import { Link } from 'react-router-dom';
import { Header, LeftBlock, RightBlock, LogoItem, NavItems } from '../../style/pages/header';
import { H1W, A2 } from '../../style/global/text';

const HeaderComponent = () => (
   <Header>
      <LeftBlock>
         <LogoItem>
            <Link to="/">
               <H1W>Header</H1W>
            </Link>
         </LogoItem>
         <NavItems>
            <A2 as={Link} to="/">
               Home
            </A2>
            <A2 as={Link} to="/count">
               Count
            </A2>
            <A2 as={Link} to="/todos">
               Todos
            </A2>
            <A2 as={Link} to="/youtube">
               Youtube
            </A2>
         </NavItems>
      </LeftBlock>
      <RightBlock>{/* <A1>TR</A1> */}</RightBlock>
   </Header>
);

export default HeaderComponent;
