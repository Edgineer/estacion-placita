(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=(a(14),a(1)),s=a(2),c=a(4),u=a(3),d=a(5),p=(a(15),a(8));function m(e){if(!isNaN(e))return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var h=[{id:1,title:"Vet\xe9 - Bad Bunny"},{id:2,title:"La Canci\xf3n - Bad Bunny, J Balvin"},{id:3,title:"Un Millon de Primaveras - Chente"},{id:4,title:"Amor Prohibido - Selena"},{id:5,title:"Up Up & Away - Kid Cudi"},{id:6,title:"Land of the Snakes - J. Cole"},{id:7,title:"3005 - Childish Gambino"},{id:8,title:"Eres - Cafe Tacuba"},{id:9,title:"Luna - Zo\xe9"},{id:10,title:"So\xf1e - Zo\xe9"},{id:11,title:"Imagine - John Lenon"},{id:12,title:"Brillas - Le\xf3n Larregui"}],y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={selectedTrack:null,player:"stopped",currentTime:null,duration:null},a.handleSkip=function(e){var t=h.findIndex((function(e){return e.title===a.state.selectedTrack})),n=h.length-1;if("previous"===e){var i=h[0===t?n:t-1];a.setState({selectedTrack:i.title})}else if("next"===e){var r=h[t===n?0:t+1];a.setState({selectedTrack:r.title,duration:null})}},a.setTime=function(e){a.player.currentTime=e},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="1st Station",this.player.addEventListener("timeupdate",(function(t){e.setState({currentTime:t.target.currentTime,duration:t.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.player.removeEventListener("timeupdate",(function(){}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.state.selectedTrack!==t.selectedTrack){var n;switch(this.state.selectedTrack){case"Vet\xe9 - Bad Bunny":n="audio/bb-vete.mp3";break;case"La Canci\xf3n - Bad Bunny, J Balvin":n="audio/la-cancion.mp3";break;case"Un Millon de Primaveras - Chente":n="audio/chente-primavera.mp3";break;case"Amor Prohibido - Selena":n="audio/selena-amor.mp3";break;case"Up Up & Away - Kid Cudi":n="audio/kid-cudi-uuaa.mp3";break;case"Land of the Snakes - J. Cole":n="audio/jcole-lots.mp3";break;case"3005 - Childish Gambino":n="audio/chg-3005.mp3";break;case"Eres - Cafe Tacuba":n="audio/cafe-tacuba-eres.mp3";break;case"Luna - Zo\xe9":n="audio/zoe-luna.mp3";break;case"So\xf1e - Zo\xe9":n="audio/zoe-sone.mp3";break;case"Imagine - John Lenon":n="audio/jl-imagine.mp3";break;case"Brillas - Le\xf3n Larregui":n="audio/leon-brillas.mp3"}n&&(this.player.src=n,this.player.play(),this.setState({player:"playing",duration:this.player.duration}))}(this.state.player!==t.player&&("paused"===this.state.player?this.player.pause():"stopped"===this.state.player?(this.player.pause(),this.player.currentTime=0,this.setState({selectedTrack:null})):"playing"===this.state.player&&"paused"===t.player&&this.player.play()),this.state.duration&&!isNaN(this.state.duration)&&this.state.duration===this.state.currentTime)&&(h.findIndex((function(e){return e.title===a.state.selectedTrack}))===h.length-1?this.setState({selectedTrack:null,player:"stopped",currentTime:null,duration:null}):this.handleSkip("next"))}},{key:"render",value:function(){var e=this,t=h.map((function(t){return i.a.createElement("li",{key:t.id,onClick:function(){return e.setState({selectedTrack:t.title})},style:{fontWeight:t.title===e.state.selectedTrack&&"bold"}},t.title)}));m(this.state.currentTime),m(this.state.duration);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"mainPlayer",className:"player"},i.a.createElement("ul",{className:"tracklist"},t),i.a.createElement(f,{setTime:this.setTime,currentTime:this.state.currentTime,duration:this.state.duration}),"stopped"!==this.state.player&&i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{onClick:function(){return e.handleSkip("previous")}},"Previous"),"paused"===this.state.player&&i.a.createElement("button",{onClick:function(){return e.setState({player:"playing"})}},"Play"),"playing"===this.state.player&&i.a.createElement("button",{onClick:function(){return e.setState({player:"paused"})}},"Pause"),i.a.createElement("button",{onClick:function(){return e.setState({player:"stopped"})}},"Stop"),i.a.createElement("button",{onClick:function(){return e.handleSkip("next")}},"Skip"))),i.a.createElement("audio",{ref:function(t){return e.player=t}}))}}]),t}(n.Component);function f(e){for(var t=e.currentTime,a=e.duration,n=e.setTime,r=m(t),o=m(a),l=[],s=0;s<a;)l.push(s),s++;var c=l.map((function(e){return i.a.createElement("div",{key:e,onClick:function(){return n(e)},style:{float:"left",cursor:"pointer",height:"30px",width:"".concat(300/Math.round(a),"px"),background:t&&Math.round(t)===e?"white":"black",transition:"all 0.5s ease-in-out"}})}));return i.a.createElement("div",{className:"timebar"},i.a.createElement("div",{className:"bar"},c),t?i.a.createElement("div",{className:"time"},r," / ",o):"")}var k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("title",null," First Station "),i.a.createElement("div",{class:"flex-container"},i.a.createElement("h1",null,"Quarantine Vibes"),i.a.createElement("div",null,i.a.createElement(p.a,{trigger:i.a.createElement("button",{class:"button"},"About"),modal:!0},(function(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("a",{className:"close",onClick:e},"\xd7"),i.a.createElement("div",{className:"header"}," Welcome to Placita Radio! "),i.a.createElement("div",{className:"content"}," ","Going to be spending alot more time indoors than anticipated due to COVID-19? Don't worry it took us all by surprise, but stay safe and while you figure out what to do I will by trying to develop this page into a fully operating internet radio station. Come checkout the page often for updates y las mejores rolas.",i.a.createElement("br",null),"Want to help Rayo escape the watermark and support the site? Please consider contributing $1 via venmo to @eloxacto along with a song request which I will add to the current list. Want to suggest a song without donating or have feedback to share? Reach me through my twitter account @eloxacto. Thanks for visiting!"))})))),i.a.createElement("div",{class:"flex-container"},i.a.createElement("video",{width:"520",height:"520",autoplay:"autoplay",muted:!0,loop:!0,id:"videojs-overlay-player",class:"video-js vjs-default-skin"},i.a.createElement("source",{src:"doggo.mov",type:"video/mp4"})),i.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.410cd1dc.chunk.js.map