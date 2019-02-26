import React from 'react';
import SearchBarComponent from './SearchBarComponent';
import VideoListComponent from './VideoListComponent';

const YoutubeTrends = () => {
   return (
      <section>
         <h1>Youtube</h1>
         <SearchBarComponent />
         <VideoListComponent></VideoListComponent>
      </section>
   );
};

export default YoutubeTrends;
