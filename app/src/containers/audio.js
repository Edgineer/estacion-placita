import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getNextTrack} from '../actions/index';

class Audio extends Component {
  render () {
    return (
      <audio
      src={`http://localhost:8080/get-mp3/${this.props.trackInfo.ytId}`}
      autoPlay={true}
      controlsList='nodownload'
      controls={true}
      onEnded={() => this.props.getNextTrack(this.props.trackInfo)}
      />
    )
  }
}

//mapStateToProps takes a part of your store and sends it into your component as props
function mapStateToProps (state) {
  return {
    trackInfo: state.trackInfo
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getNextTrack: getNextTrack
  }, dispatch); 
}

//connect takes your component (Audio) and makes it aware of your store through mapStateToProps
//and exports the new smart container that has access to the store
export default connect(mapStateToProps, mapDispatchToProps)(Audio);
