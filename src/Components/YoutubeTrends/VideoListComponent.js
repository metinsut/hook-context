import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';
import YoutubeApi from '../../services/Youtube';
import * as Y from '../../style/pages/youtube';

const VideoListComponent = () => {
   const { youtube } = useContext(GlobalContext);
   useEffect(() => {
      fetchApi();
      // youtube.dispatchYoutube(api);
   });

   const fetchApi = async () => {
      const api = await YoutubeApi();
      console.log(api);
   };

   // const checkedItem = id => todos.dispatchYoutube({ type: 'completed', payload: id });

   return (
      <section>
         <Y.CardWrapper>
            <Y.CardContainer>
               <Y.CardItem>
                  <Y.CardImage>{/* <img src={videos.thumbnail} alt={videos.title} /> */}</Y.CardImage>
                  <Y.CardTitle>{/* <p>{videos.title}</p> */}</Y.CardTitle>
               </Y.CardItem>
            </Y.CardContainer>
         </Y.CardWrapper>
      </section>
   );
};

export default VideoListComponent;
