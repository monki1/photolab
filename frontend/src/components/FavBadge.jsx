import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({ likedPhotoArray }) => {
  const displayAlert = likedPhotoArray.length > 0;
  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={displayAlert} />
    </div>
  );
};

export default FavBadge;