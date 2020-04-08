import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formSubmited} from '../actions/index';

class Form extends Component {
  render () {
    return (
      <div>
        <label defaultValue="Artist"/>
        <textarea ref="artistText" defaultValue=""></textarea>
        
        <label defaultValue="Song Title"/>
        <textarea ref="trackText" defaultValue=""></textarea>

        <button
          onClick={() => this.props.formSubmited(this.refs.artistText.value, this.refs.trackText.value)}
        >Submit!
        </button>
      </div>     
    )
  }
}

//mapStateToProps takes a part of your store and sends it into your component as props
function mapStateToProps (state) {
  return {
    artist: state.requestedSong.artist,
    track: state.requestedSong.track
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    formSubmited: formSubmited
  }, dispatch); 
}

//connect takes your component (Audio) and makes it aware of your store through mapStateToProps
//and exports the new smart container that has access to the store
export default connect(mapStateToProps, mapDispatchToProps)(Form);

