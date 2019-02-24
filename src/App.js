import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Count from './Components/Count/Count';
import TodoList from './Components/TodoList/TodoList';
import YoutubeTrends from './Components/YoutubeTrends/YoutubeTrends';
import Header from './Components/Common/HeaderComponent';
import { Main, SiteWrapper } from './style/pages/index';

const App = () => (
   <Main>
      <Header />
      <SiteWrapper>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/count" component={Count} />
            <Route path="/todos" component={TodoList} />
            <Route path="/youtube" component={YoutubeTrends} />
         </Switch>
      </SiteWrapper>
   </Main>
);

export default App;
