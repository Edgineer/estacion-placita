const axios = require('axios');

export const getNextTrack = (trackInfo) => {
  console.log(`Hey ${trackInfo.track} finished playing!`);
  return (dispatch) => {
    axios.get('http://localhost:8080/select-next-track')
    .then(response => {
      dispatch(songEnded(response.data));
    })
    .catch( err => {
      console.log('error');
    })
  }
}

const songEnded = (trackInfo) => {
  return {
    type: 'SONG_ENDED',
    payload: trackInfo
  }
}

export const formSubmited = (artist, track) => {
  console.log(`We will verify if we can play ${track} by ${artist}.`);
  let requestedTrack = {
    artist: artist,
    track: track
  } 
  return {
    type: 'TRACK_REQUESTED',
    payload: requestedTrack
  }
}

