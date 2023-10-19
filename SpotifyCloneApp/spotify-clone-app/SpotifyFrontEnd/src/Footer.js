import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
// import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider} from '@mui/material';

function Footer() {
  return (
    <div className='footer'>

    <div className='footer__left'>
       <img className='footer__albumLogo' src = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc_screen.jpg?ts=1561427894" alt = "" />
       <div className='footer__songInfo'>
         <h4>Yeah!</h4>
         <p>User</p>
       </div>
    </div>

    <div className='footer__center'>
       <ShuffleIcon className='footer__green' />
       <SkipPreviousIcon className='footer__icon' />
       <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
       <SkipNextIcon className='footer__icon' />
       <RepeatIcon className='footer__green' />
    </div>

    <div className='footer__right'>
    <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
    </div>

    </div>
  )
}

export default Footer