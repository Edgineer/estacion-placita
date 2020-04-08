import {combineReducers} from 'redux';
import AudioReducer from './reducer-trackInfo';
import RequestReducer from './reducer-request';

const allReducers = combineReducers({
  trackInfo: AudioReducer,
  requestedSong: RequestReducer
});

export default allReducers;