const express = require('express');
const ytdl = require('ytdl-core');

//creates the express application used to handle other requests
const app = express();

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

//GET random track from the database

//POST add a track to the list

const port = process.env.PORT ? process.env.PORT : 8080;

app.listen(port, function () {
  console.log('http://localhost:' + port);
});
