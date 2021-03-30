import React from 'react';
import ReactPlayer from 'react-player/lazy'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
// import { useFlipAnimation } from 'react-easy-flip'
import { Transition } from "react-transition-group";
function Channel() {
  return (
    <>
    <h2 className="channel">Youtube Channel</h2>
    <div>
    <Image className="image" src="https://www.pngitem.com/pimgs/m/512-5129258_cool-youtube-logo-transparent-facebook-logo-designs-hd.png" fluid />
    </div>
   <Row className="player-wrapper">
   <ReactPlayer url='https://www.youtube.com/playlist?list=PLtlSBgeQ3o0MPlWISgvDh8KnzLgIOqjgO' />
   <ReactPlayer url='https://www.youtube.com/playlist?list=PLtlSBgeQ3o0MCFL4UgkpgvMbMLZjDVp02' />
   <ReactPlayer url='https://www.youtube.com/playlist?list=PLtlSBgeQ3o0Ol6V9RtNtd29peamRkBBvH' />
   <ReactPlayer url='https://www.youtube.com/playlist?list=PLtlSBgeQ3o0Mp65mf0VnyIgeICOt86b4F' />
   <ReactPlayer url='https://www.youtube.com/playlist?list=PLtlSBgeQ3o0M-aAjzIP9ZUbPw8ufrg5wn' />
   <ReactPlayer url='https://www.youtube.com/playlist?list=PLtlSBgeQ3o0O-9BYjRn6wSRaabHft_Odm' />


   </Row>
   </>
  );
}

 
export default Channel;

