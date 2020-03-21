import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
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
        </div>
      </>
    );
  }
}

export default App;
