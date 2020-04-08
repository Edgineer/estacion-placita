const ytsr = require('ytsr');
const yts = require( 'yt-search' )
const fetchVideoInfo = require('youtube-info');
const getYouTubeID = require('get-youtube-id');
 
/*
export function ytSearch(artist, track) {
  const title = `${artist} ${track}`;
  const opts = {
    limit: 2,
    safeSeach: true
  };
  ytsr(title,opts,(err, res) => {
    if (err) throw err;
    console.log("resolved ytsr")
    let vidLink = res.items[0].link;
    let vidId = getYouTubeID(vidLink);
    if(validateVideo(vidId, track)){
      console.log(`${track} by ${artist} has been added`)
    } else { console.log(`${track} by ${artist} cannot been added`)}
  }); 
}
*/

function findAudio(artist, track) {
  const title = `${artist} ${track}`;
  yts(title, (err, r) => {
    if (err) throw err;
    let vids = r.videos;
    let vidId = vids[0].videoId;
    if(validateVideo(vidId, track)) {
      return vidId;
    } else { return 0; }
  });
}


function meetsRequirements(videoInfo, track) {
  if (
    videoInfo.isFamilyFriendly === true &&
    videoInfo.duration <= 360 &&
    videoInfo.views >= 100000 &&
    videoInfo.genre === 'Music' &&
    videoInfo.regionsAllowed !== undefined &&
    videoInfo.regionsAllowed.includes('US') &&
    videoInfo.title.toLowerCase().includes(track.toLowerCase())
  )
    return true;
  else { 
    return false;
  }
}

function validateVideo(url, track) {
  fetchVideoInfo(url)
  .then( videoInfo => {
    if (meetsRequirements(videoInfo, track)) {
      return true;
    } else {
      return false;
    }
  })
  .catch( err => {
    console.log(`An error occured while validating the request: ${err}`);
    return false;
  })
}

// var c = new Crawler({
//   callback: function(error, res, done){
//     if (error){
//       console.error(error);
//     } else {
//       var genres = [];
//       var $ = res.$;
//       $('a').each((i,value) => genres.push(value.children[0].data));
//       console.log(genres);
//     }
//     done();
//   }
// })

// function getArtistsGenre(artist) {
//   c.queue(`http://everynoise.com/lookup.cgi?who=${artist}`);
// }

// const artist = "michael jacksonn" 
// const track = "beat it"

function totalPackage (artist, track) {
  ytSearch(artist, track)
  .then( res => {
    console.log("resolved yt-search")
    let vidLink = res.items[0].link;
    let vidId = getYouTubeID(vidLink);
    if(validateVideo(vidId, track)){
      console.log(`${track} by ${artist} has been added`)
    } else { console.log(`${track} by ${artist} cannot been added`) }
  })
  .catch ( err => {
    console.error(err);
  })
}

// ytSearch(artist, track)
// .then(url => {validateVideo(url, track)})
// .catch(err => {console.log(err)})

// getArtistsGenre(artist);
