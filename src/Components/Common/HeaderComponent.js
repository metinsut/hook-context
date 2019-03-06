import React from 'react';
import { Link } from 'react-router-dom';
import { Header, LeftBlock, RightBlock, LogoItem, NavItems } from '../../style/pages/header';
import { H1W, A2 } from '../../style/global/text';
import * as R from '../../Const/routes';

const HeaderComponent = () => (
   <Header>
      <LeftBlock>
         <LogoItem>
            <Link to="/">
               <H1W>HOOK</H1W>
            </Link>
         </LogoItem>
         <NavItems>
            <A2 as={Link} to={R.BASE}>
               Home
            </A2>
            <A2 as={Link} to={R.COUNT}>
               Count
            </A2>
            <A2 as={Link} to={R.TODOS}>
               Todos
            </A2>
            <A2 as={Link} to={R.YOUTUBE}>
               Youtube
            </A2>
            <A2 as={Link} to={R.TOGGLE}>
               Toggle
            </A2>
         </NavItems>
      </LeftBlock>
      <RightBlock>{/* <A1>TR</A1> */}</RightBlock>
   </Header>
);

export default HeaderComponent;
