import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Common/HeaderComponent';
import Home from './Components/Home/Home';
import { Main, SiteWrapper } from './style/pages/index';
import * as R from './Const/routes';
const Count = lazy(() => import('./Components/Count/Count'));
const TodoList = lazy(() => import('./Components/TodoList/TodoList'));
const YoutubeTrends = lazy(() => import('./Components/YoutubeTrends/YoutubeTrends'));
const YoutubePlayer = lazy(() => import('./Components/YoutubeTrends/youtubePlayer'));


const App = () => (
   <Main>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
         <SiteWrapper>
            <Switch>
               <Route exact path={R.BASE} component={Home} />
               <Route path={R.COUNT} component={Count} />
               <Route path={R.TODOS} component={TodoList} />
               <Route exact path={R.YOUTUBE} component={YoutubeTrends} />
            </Switch>
            <Route path={R.YOUTUBE_ID} component={YoutubePlayer} />
         </SiteWrapper>
      </Suspense>
   </Main>
);

export default App;
