import { combineReducers  } from 'redux';

import trackReducer from './trackReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
    tracks: trackReducer,
    player: playerReducer
})

export default rootReducer;