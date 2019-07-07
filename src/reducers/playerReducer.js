import {
    SELECT_SONGS,
    PLAY_SONGS,
    PAUSE_SONGS,
    STOP_SONGS,
    NEXT_SONGS,
    PREV_SONGS
} from '../actions/constants';

const initialState = {
    statusPlaying: false,
    track: null,
    msg: '',
    playList: []
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_SONGS:{
            const newState = {
                ...state,
                statusPlaying: true,
                track: action.payload.track,
                playList: action.payload.tracks
            }
            return newState;
        }
        case PAUSE_SONGS: {
            const newState = {
              ...state,
              statusPlaying: false,
              msg: action.payload,
            }
            return newState
        }
        case STOP_SONGS: {
            const newState = {
              ...initialState,
              msg:'stopped'
            }
            return newState
        }
        case PLAY_SONGS: {
            const newState = {
              ...state,
              statusPlaying: true,
              msg: action.payload,
            }
            return newState
        }
        case NEXT_SONGS: {
            const newState = {
              ...state,
              track: action.payload,
              statusPlaying: true,
              msg: 'next',
            }
            return newState;
        }
        case PREV_SONGS: {
            const newState = {
              ...state,
              track: action.payload,
              statusPlaying: true,
              msg: 'prev',
            }
            return newState;
        }
        default: return state
    }
}

export default playerReducer;