import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {songEnded} from '../actions/index';

class Audio extends Component {
  render () {
    return (
      <audio
      src={`http://localhost:8080/get-mp3/${this.props.trackInfo.ytId}`}
      autoPlay
      controlsList='nodownload'
      controls={true}
      onEnded={() => this.props.songEnded(this.props.trackInfo)}
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
    songEnded: songEnded
  }, dispatch); 
}

//connect takes your component (Audio) and makes it aware of your store through mapStateToProps
//and exports the new smart container that has access to the store
export default connect(mapStateToProps, mapDispatchToProps)(Audio);
