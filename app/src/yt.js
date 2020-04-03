const fetch = require('node-fetch');
const yts = require( 'yt-search' );
const fetchVideoInfo = require('youtube-info');
const Crawler = require('crawler');

async function ytSearch(artist, track) {
  const title = `${artist} ${track}`;
  const opts = {
    query: title,
    pageStart: 1,
    pageEnd: 1
  };
  try {
    const results = await yts(opts);
    const topVideo = results.videos[0];
    return topVideo.videoId;
  } catch {
    console.log(`Failed to perform yt-search for query: ${title}`);
  }
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
      console.log(`${videoInfo.title} has been added to the playlist`);
    } else {
      console.log(`${videoInfo.title} does not meet the requirements`);
    }
  })
  .catch( err => {
    console.log(`An error occured while validating the request: ${err}`);
  })
}

var c = new Crawler({
  callback: function(error, res, done){
    if (error){
      console.error(error);
    } else {
      var genres = [];
      var $ = res.$;
      $('a').each((i,value) => genres.push(value.children[0].data));
      console.log(genres);
    }
    done();
  }
})

function getArtistsGenre(artist) {
  c.queue(`http://everynoise.com/lookup.cgi?who=${artist}`);
}

const artist = "michael jacksonn" 
const track = "vuela, vuela"

// ytSearch(artist, track)
// .then(url => {validateVideo(url, track)})
// .catch(err => {console.log(err)})

getArtistsGenre(artist);