
export const songEnded = (trackInfo) => {
  console.log(`Hey ${trackInfo.submitted_by}, ${trackInfo.title} finished playing!`);
  let newTrackInfo = {
    ytId: 'xkmNhe7lnLw',
    title: 'Que tal si eres tu',
    submitted_by: 'Edgineer'
  } 
  return {
    type: 'SONG_ENDED',
    payload: newTrackInfo
  }
}
