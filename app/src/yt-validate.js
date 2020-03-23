var youtubeValidate = require("youtube-validate");

var validUrl1 = 'youtube.com/watch?v=2XH5_qafR8k';
var validUrl2 = 'www.youtube.com/watch?v=2XH5_qafR8k';
var invalidUrl1 = 'random_stuff_here';
var invalidUrl2 = 'www.youtube.com/';

console.log(youtubeValidate.validateUrl(validUrl1)
.then(res => {
    console.log("resolved! " + res);
  }).catch( err => {
    console.log("rejected :(" + err);
  })
);
