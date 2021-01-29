import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", during: "4:05" },
    { title: "Beatufibul gire", during: "3:45" },
    { title: "All Star", during: "2:30" },
    { title: "I want it the way", during: "1:45" },
    { title: "Macarena", during: "2:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
