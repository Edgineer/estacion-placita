const express = require('express');
const ytdl = require('ytdl-core');
const bodyParser = require('body-parser');
const yts = require( 'yt-search' )
const fetchVideoInfo = require('youtube-info');
var admin = require('firebase-admin');
// Fetch the service account key JSON file contents
var serviceAccount = require("./estacion-placita-firebase-adminsdk.json");

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://estacion-placita.firebaseio.com",
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("/general");
var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(randomProperty(snapshot.val()));
});

//creates the express application used to handle other requests
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

//GET random track from the database
app.get('/select-next-track', (req, res) => {
  try {
    ref.once("value", function(snapshot) {
      var nextInfo = randomProperty(snapshot.val());
      return res.status(200).json(nextInfo);
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

//GET request to get audio stream of a given yt video
app.get('/get-mp3/:videoId', (req, res) => {
  try {
    const requestUrl = "http://youtube.com/watch?v=" + req.params.videoId;
    ytdl(requestUrl, { filter: "audioonly", highWaterMark: 1<<25, quality: "lowest" })
    .pipe(res)
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

//POST request to add a track to the playlist
app.post('/submit-request/nogenre', (req, res) => {
  const artist = req.body.artist;
  const track = req.body.track;
  try {
    yts(`${artist} ${track}`, (err, r) =>{
      if(err) {throw err;}
      let vids = r.videos;
      if(vids.length !== 0) {
        var vidId = vids[0].videoId;
        fetchVideoInfo(vidId)
        .then( videoInfo => {
          if (
            videoInfo.isFamilyFriendly === true &&
            videoInfo.duration <= 360 &&
            videoInfo.views >= 90000 &&
            videoInfo.genre === 'Music' &&
            videoInfo.regionsAllowed !== undefined &&
            videoInfo.regionsAllowed.includes('US') &&
            videoInfo.title.toLowerCase().includes(track.toLowerCase())
          ) {
            console.log(`${req.body.track} by ${req.body.artist} has been added`);
            ref.push({
              artist: artist,
              track: track,
              ytId: vidId
            });
            return res.status(200).json({ success: true });
          } else {
            console.log(`${req.body.track} by ${req.body.artist} cannot been added`);
            return res.status(400).json({ success: false, error: "track rejected" });
          }
        })
        .catch( err => {
          console.log(`An error occured while validating the request: ${err}`);
        })
      } else {throw "No search results";}
    });
  } catch {
    return res.status(500).json({ success: false, error: err.message });
  }
});


const port = process.env.PORT ? process.env.PORT : 8080;

app.listen(port, function () {
  console.log('http://localhost:' + port);
});


/**
function meetsRequirements(videoInfo, track) {
  var res = (
    videoInfo.isFamilyFriendly === true &&
    videoInfo.duration <= 360 &&
    videoInfo.views >= 100000 &&
    videoInfo.genre === 'Music' &&
    videoInfo.regionsAllowed !== undefined &&
    videoInfo.regionsAllowed.includes('US') &&
    videoInfo.title.toLowerCase().includes(track.toLowerCase())
  );
  console.log(`in meetsreq req is ${res}`);
  return res;
}
function validateVideo(url, track) {
  var accepted = false;
  fetchVideoInfo(url)
  .then( videoInfo => {
    accepted = meetsRequirements(videoInfo, track);
    console.log(`in validateVideo accepted = ${accepted} after calling meetReqs`);
  })
  .catch( err => {
    console.log(`An error occured while validating the request: ${err}`);
  })

  return accepted;
}

async function findAudio(artist, track) {
  try {
    const r = await yts(`${artist} ${track}`);
    let vids = r.videos;
    if(vids.length !== 0){
      let vidId = vids[0].videoId;
      console.log(`in find audio validatevideo is ${validateVideo(vidId, track)}`);
      return validateVideo(vidId, track);
    }
    return false;
  } catch {
    return false;
  }
}
*/
