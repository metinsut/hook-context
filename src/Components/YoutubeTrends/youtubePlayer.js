import React from 'react';
import { Link } from 'react-router-dom';
import { PlayerContainer, Iframe, Back } from '../../style/pages/player';
import { P1 } from '../../style/global/text';

const YoutubePlayer = props => {
   return (
      <PlayerContainer>
         <Iframe
            className="frame-block"
            src={props.match && `https://www.youtube.com/embed/${props.match.params.id}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="100%"
            height="100%"
         />
         <Back>
            <Link className="btn btn-primary" to="/youtube">
               <P1>Back</P1>
            </Link>
         </Back>
      </PlayerContainer>
   );
};

export default YoutubePlayer;
