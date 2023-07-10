import React from 'react';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

//state logic from useApplicationData
const App = () => {
  
  console.log("running");
  const { photoData,
    topicData,
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    onClose,
    onLoadTopic } = useApplicationData();

    console.log(photoData);
  //rendering Homeroute and Modal route
  return (
    < div className="App" >
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        onClickModal={onClickModal}
        onClickLikes={onClickLikes}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic} />
      {displayModal &&
        (<PhotoDetailsModal
          photoData={photoData}
          onClose={onClose}
          modalData={modalData}
          onClickModal={onClickModal}
          onClickLikes={onClickLikes}
          likedPhotoArray={likedPhotoArray}
        />
        )}
    </div >
  );
};

export default App;


