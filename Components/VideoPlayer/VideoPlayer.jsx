/* --- type rafce for code snippet ---*/
import React, { useRef } from 'react'
import './VideoPlayer.css'/* import css file */
import video_player from '../../assets/video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
const player = useRef(null);
const closePlayer =(e)=>{
  if(e.target == player.current){
    setPlayState(false);
  }
}

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video_player} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
