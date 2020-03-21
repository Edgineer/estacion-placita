import React, { Component } from "react";
import "./styles.css";
import Popup from "reactjs-popup";

const bbVete = "audio/bb-vete.mp3";
const laCancion = "audio/la-cancion.mp3";
const vfPrim = "audio/chente-primavera.mp3";
const selAmor = "audio/selena-amor.mp3";
const kcUp = "audio/kid-cudi-uuaa.mp3";
const coleLOTS = "audio/jcole-lots.mp3";
const chg3005 = "audio/chg-3005.mp3";
const ctEres = "audio/cafe-tacuba-eres.mp3";
const zoeluna = "audio/zoe-luna.mp3";
const zoeSone = "audio/zoe-sone.mp3";
const lenonImagine = "audio/jl-imagine.mp3";
const leonBrillas = "audio/leon-brillas.mp3";


function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

const TRACKS = [
  { id: 1, title: "Veté - Bad Bunny"},
  { id: 2, title: "La Canción - Bad Bunny, J Balvin"},
  { id: 3, title: "Un Millon de Primaveras - Chente"},
  { id: 4, title: "Amor Prohibido - Selena"},
  { id: 5, title: "Up Up & Away - Kid Cudi"},
  { id: 6, title: "Land of the Snakes - J. Cole"},
  { id: 7, title: "3005 - Childish Gambino"},
  { id: 8, title: "Eres - Cafe Tacuba"},
  { id: 9, title: "Luna - Zoé" },
  { id: 10, title: "Soñe - Zoé"},
  { id: 11, title: "Imagine - John Lenon" },
  { id: 12, title: "Brillas - León Larregui"}
];

class AudioPlayer extends Component{
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null
  };
  
  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Veté - Bad Bunny":
          track = bbVete;
          break;
        case "La Canción - Bad Bunny, J Balvin":
            track = laCancion;
            break;
        case "Un Millon de Primaveras - Chente":
          track = vfPrim;
          break;
        case "Amor Prohibido - Selena":
          track = selAmor;
          break;
        case "Up Up & Away - Kid Cudi":
          track = kcUp;
          break;
        case "Land of the Snakes - J. Cole":
            track = coleLOTS;
            break;
        case "3005 - Childish Gambino":
          track = chg3005;
          break;
        case "Eres - Cafe Tacuba":
          track = ctEres;
          break;
        case "Luna - Zoé":
          track = zoeluna;
          break;
        case "Soñe - Zoé":
          track = zoeSone;
          break;
        case "Imagine - John Lenon":
          track = lenonImagine;
          break;
        case "Brillas - León Larregui":
          track = leonBrillas;
          break;  
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
    if (
      this.state.duration &&
      !isNaN(this.state.duration) &&
      this.state.duration === this.state.currentTime
    ) {
      const currentTrackIndex = TRACKS.findIndex(
        track => track.title === this.state.selectedTrack
      );
      const tracksAmount = TRACKS.length - 1;
      if (currentTrackIndex === tracksAmount) {
        this.setState({
          selectedTrack: null,
          player: "stopped",
          currentTime: null,
          duration: null
        });
      } else {
        this.handleSkip("next");
      }
    }
  }

  handleSkip = direction => {
    const currentTrackIndex = TRACKS.findIndex(
      track => track.title === this.state.selectedTrack
    );
    const tracksAmount = TRACKS.length - 1;
    if (direction === "previous") {
      const previousTrack =
        currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
      const trackToPlay = TRACKS[previousTrack];
      this.setState({ selectedTrack: trackToPlay.title });
    } else if (direction === "next") {
      const nextTrack =
        currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
      const trackToPlay = TRACKS[nextTrack];
      this.setState({ selectedTrack: trackToPlay.title, duration: null });
    }
  };

  setTime = time => {
    this.player.currentTime = time;
  };

  render() {
    const list = TRACKS.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
          style={{
            fontWeight: item.title === this.state.selectedTrack && "bold"
          }}
        >
          {item.title}
        </li>
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
    <>
      <div id="mainPlayer" className="player">
        <ul className="tracklist">{list}</ul>
        <TimeBar
          setTime={this.setTime}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
        />
        {this.state.player !== "stopped" && (
          <div className="buttons">
            <button onClick={() => this.handleSkip("previous")}>
              Previous
            </button>
            {this.state.player === "paused" && (
              <button onClick={() => this.setState({ player: "playing" })}>
                Play
              </button>
            )}
            {this.state.player === "playing" && (
              <button onClick={() => this.setState({ player: "paused" })}>
                Pause
              </button>
            )}
            <button onClick={() => this.setState({ player: "stopped" })}>
              Stop
            </button>
            <button onClick={() => this.handleSkip("next")}>Skip</button>
          </div>
        )}
      </div>
      <audio ref={ref => (this.player = ref)} />
    </>
    );
  }
}

class App extends Component {
  render() {

    return (
      <>
        <title> First Station </title>
        <div class="flex-container">
          <h1>Quarantine Vibes</h1>
          <div>
            <Popup trigger={<button class="button">About</button>} modal>
              {close => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="header"> Welcome to Placita Radio! </div>
                  <div className="content">
                    {" "}
                      Going to be spending alot more time indoors than anticipated due to COVID-19?
                      Don't worry it took us all by surprise, but stay safe and while you figure out what to do
                      I will by trying to develop this page into a fully operating internet radio station. Come 
                      checkout the page often for updates y las mejores rolas.
                    <br />
                    Want to help Rayo escape the watermark and support the site? Please consider contributing $1 via venmo to
                    @eloxacto along with a song request which I will add to the current list. Want to suggest a song without donating or have feedback to share? 
                    Reach me through my twitter account @eloxacto. Thanks for visiting!
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div class="flex-container">
          <video width="520" height="520" autoplay="autoplay" muted loop id="videojs-overlay-player" class="video-js vjs-default-skin">
            <source src="doggo.mov" type='video/mp4'/>
          </video>
          <AudioPlayer></AudioPlayer>
        </div>
      </>
    );
  }
}

function TimeBar({ currentTime, duration, setTime }) {
  const formattedCurrentTime = getTime(currentTime);
  const formattedDuration = getTime(duration);
  const sBits = [];
  let count = 0;
  while (count < duration) {
    sBits.push(count);
    count++;
  }
  const seconds = sBits.map(second => {
    return (
      <div
        key={second}
        onClick={() => setTime(second)}
        style={{
          float: "left",
          cursor: "pointer",
          height: "30px",
          width: `${300 / Math.round(duration)}px`,
          background:
            currentTime && Math.round(currentTime) === second
              ? "white"
              : "black",
          transition: "all 0.5s ease-in-out"
        }}
      />
    );
  });
  return (
    <div className="timebar">
      <div className="bar">{seconds}</div>
      {currentTime ? (
        <div className="time">
          {formattedCurrentTime} / {formattedDuration}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
