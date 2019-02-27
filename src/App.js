import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Count from './Components/Count/Count';
import TodoList from './Components/TodoList/TodoList';
import YoutubeTrends from './Components/YoutubeTrends/YoutubeTrends';
import Header from './Components/Common/HeaderComponent';
import { Main, SiteWrapper } from './style/pages/index';
import YoutubePlayer from './Components/YoutubeTrends/youtubePlayer';
import * as R from './Const/routes';

const App = () => (
   <Main>
      <Header />
      <SiteWrapper>
         <Switch>
            <Route exact path={R.BASE} component={Home} />
            <Route path={R.COUNT} component={Count} />
            <Route path={R.TODOS} component={TodoList} />
            <Route exact path={R.YOUTUBE} component={YoutubeTrends} />
         </Switch>
         <Route path={R.YOUTUBE_ID} component={YoutubePlayer} />
      </SiteWrapper>
   </Main>
);

export default App;
