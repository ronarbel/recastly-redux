import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // let options = {
  //   key: YOUTUBE_API_KEY,
  //   query: q,
  //   max: 5
  // }

  return (dispatch) => {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    }, (data) => { 
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;


