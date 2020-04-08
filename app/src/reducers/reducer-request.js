const axios = require('axios');

export default function(state=null, action) {
  switch (action.type) {
    case 'TRACK_REQUESTED':
      console.log("In the Reducer");
      //make api call
      axios.post('http://localhost:8080/submit-request/nogenre', {
        artist: action.payload.artist,
        track: action.payload.track
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return action.payload;
    default:
      return {
        artist: "",
        track: ""
      };
  }
}