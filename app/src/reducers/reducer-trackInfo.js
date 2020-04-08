
export default function(state=null, action) {
  switch (action.type) {
    case 'SONG_ENDED':
      return action.payload
    case 'TRACK_REQUESTED':
      return state
    default:
      return {
        ytId: "5DEdR5lqnDE",
        artist: "Spongebob",
        track: "none"
      };
  }
}