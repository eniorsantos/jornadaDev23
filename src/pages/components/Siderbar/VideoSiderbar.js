import React, { useState } from 'react';
import './videosiderbar.css';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

function VideoSiderbar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSiderbar">
      <div className="videosidebar_options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar_options">
        <CommentIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videosidebar_options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSiderbar;
