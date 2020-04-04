import {combineReducers} from 'redux';
import AudioReducer from './reducer-nextTrack';


const allReducers = combineReducers({
  trackInfo: AudioReducer
});

export default allReducers;