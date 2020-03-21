var fetchVideoInfo = require('youtube-info');

var validUrl1 = 'ARt9HV9T0w8';

function meetsReqs(videoInfo) {
  if (
    videoInfo.isFamilyFriendly === true &&
    videoInfo.duration <= 360 &&
    videoInfo.views >= 100000 &&
    videoInfo.genre === 'Music' &&
    videoInfo.regionsAllowed !== undefined &&
    videoInfo.regionsAllowed.includes('US') 
  )
    return true;
  else{ return false;}
}

fetchVideoInfo(validUrl1)
.then(videoInfo => {
  if(meetsReqs(videoInfo)){
    console.log("We will play " + videoInfo.title);
  } else{
    console.log("Sorry we will not play that");
  }
}).catch(err =>{
  console.log("rejected :(" + err);
});
