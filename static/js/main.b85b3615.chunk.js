(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),l=(a(13),a(3)),o=a(4),c=a(6),u=a(5),p=a(7);a(14);function d(e){if(!isNaN(e))return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var m=[{id:1,title:"Vet\xe9 - Bad Bunny"},{id:2,title:"Un Millon de Primaveras - Chente"},{id:3,title:"Eres - Cafe Tacuba"},{id:4,title:"So\xf1e - Zo\xe9"},{id:5,title:"Luna - Zo\xe9"},{id:6,title:"Locos - Leon"}];function h(e){for(var t=e.currentTime,a=e.duration,n=e.setTime,i=d(t),s=d(a),l=[],o=0;o<a;)l.push(o),o++;var c=l.map((function(e){return r.a.createElement("div",{key:e,onClick:function(){return n(e)},style:{float:"left",cursor:"pointer",height:"30px",width:"".concat(300/Math.round(a),"px"),background:t&&Math.round(t)===e?"white":"black",transition:"all 0.5s ease-in-out"}})}));return r.a.createElement("div",{className:"timebar"},r.a.createElement("div",{className:"bar"},c),t?r.a.createElement("div",{className:"time"},i," / ",s):"")}var y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedTrack:null,player:"stopped",currentTime:null,duration:null},a.handleSkip=function(e){var t=m.findIndex((function(e){return e.title===a.state.selectedTrack})),n=m.length-1;if("previous"===e){var r=m[0===t?n:t-1];a.setState({selectedTrack:r.title})}else if("next"===e){var i=m[t===n?0:t+1];a.setState({selectedTrack:i.title,duration:null})}},a.setTime=function(e){a.player.currentTime=e},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="1st Station",this.player.addEventListener("timeupdate",(function(t){e.setState({currentTime:t.target.currentTime,duration:t.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.player.removeEventListener("timeupdate",(function(){}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.state.selectedTrack!==t.selectedTrack){var n;switch(this.state.selectedTrack){case"Vet\xe9 - Bad Bunny":n="audio/romantic-espanol/bb-vete.mp3";break;case"Un Millon de Primaveras - Chente":n="audio/romantic-espanol/chente-primavera.mp3";break;case"Eres - Cafe Tacuba":n="audio/romantic-espanol/cafe-tacuba-eres.mp3";break;case"So\xf1e - Zo\xe9":n="audio/romantic-espanol/zoe-sone.mp3";break;case"Luna - Zo\xe9":n="audio/romantic-espanol/zoe-luna.mp3";break;case"Locos - Leon":n="audio/romantic-espanol/leon-locos.mp3"}n&&(this.player.src=n,this.player.play(),this.setState({player:"playing",duration:this.player.duration}))}(this.state.player!==t.player&&("paused"===this.state.player?this.player.pause():"stopped"===this.state.player?(this.player.pause(),this.player.currentTime=0,this.setState({selectedTrack:null})):"playing"===this.state.player&&"paused"===t.player&&this.player.play()),this.state.duration&&!isNaN(this.state.duration)&&this.state.duration===this.state.currentTime)&&(m.findIndex((function(e){return e.title===a.state.selectedTrack}))===m.length-1?this.setState({selectedTrack:null,player:"stopped",currentTime:null,duration:null}):this.handleSkip("next"))}},{key:"render",value:function(){var e=this,t=m.map((function(t){return r.a.createElement("li",{key:t.id,onClick:function(){return e.setState({selectedTrack:t.title})},style:{fontWeight:t.title===e.state.selectedTrack&&"bold"}},t.title)}));d(this.state.currentTime),d(this.state.duration);return r.a.createElement(r.a.Fragment,null,r.a.createElement("title",null," First Station "),r.a.createElement("h1",null,"Quarantine Vibes"),r.a.createElement("div",{className:"player"},r.a.createElement("ul",{className:"tracklist"},t),r.a.createElement(h,{setTime:this.setTime,currentTime:this.state.currentTime,duration:this.state.duration}),"stopped"!==this.state.player&&r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return e.handleSkip("previous")}},"Previous"),"paused"===this.state.player&&r.a.createElement("button",{onClick:function(){return e.setState({player:"playing"})}},"Play"),"playing"===this.state.player&&r.a.createElement("button",{onClick:function(){return e.setState({player:"paused"})}},"Pause"),r.a.createElement("button",{onClick:function(){return e.setState({player:"stopped"})}},"Stop"),r.a.createElement("button",{onClick:function(){return e.handleSkip("next")}},"Skip"))),r.a.createElement("audio",{ref:function(t){return e.player=t}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b85b3615.chunk.js.map