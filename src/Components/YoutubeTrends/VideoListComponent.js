import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initYoutubeData } from '../../Context/actions/youtube';
import { GlobalContext } from '../../Context/GlobalProvider';
import * as Y from '../../style/pages/youtube';
import { P1T } from '../../style/global/text';
import { YOUTUBE } from '../../Const/routes';

const VideoListComponent = () => {
   const { youtube } = useContext(GlobalContext);
   useEffect(() => {
      if (youtube.stateYoutube.list.length === 0) {
         initYoutubeData(youtube);
      }
   }, []);

   return (
      <section>
         <Y.CardWrapper>
            {youtube.stateYoutube.list.map((item, key) => (
               <Y.CardContainer key={key}>
                  <Y.CardItem as={Link} to={YOUTUBE + '/' + item.id}>
                     <Y.CardImage>
                        <Y.Image src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                     </Y.CardImage>
                     <Y.CardTitle>
                        <P1T>{item.snippet.title}</P1T>
                     </Y.CardTitle>
                  </Y.CardItem>
               </Y.CardContainer>
            ))}
         </Y.CardWrapper>
      </section>
   );
};

export default VideoListComponent;
