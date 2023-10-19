import React from 'react';
import Header from './Header';
import "./Body.css";
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Body({ spotify }) {

  const[{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
     <Header spotify={spotify} />

     <div className='body__info'> 
       <img src = "https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png" alt = { discover_weekly?.images[0].url } />
       <div className='body__infoText'>
         <strong>PLAYLIST</strong>
         <h2>Discover weekly</h2>
         <p>{discover_weekly?.description}</p>
       </div>
     </div>

        <div className='body__songs'>
         <div className='body__icons'>
         <PlayCircleFilledIcon className='body__shuffle' />
         <FavoriteIcon fontSize='large' />
         <MoreHorizIcon />
         </div>

         {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}

        </div>   
    </div>
  );
}

export default Body;