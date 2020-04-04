export default function(state=null, action) {
  switch (action.type) {
    case 'SONG_ENDED':
      return action.payload
    default:
      return {
        ytId: "I2mJKRocc2A",
        title: "Spongebob",
        submitted_by: "Edgineer"
      }
  }
  return state;
}