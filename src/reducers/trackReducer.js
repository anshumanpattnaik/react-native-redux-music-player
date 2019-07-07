import {
    FETCH_TRACKS
} from '../actions/constants';

const trackReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TRACKS: {
            const newState = action.payload;
            return newState;
        }
        default:
            return state
    }
}

export default trackReducer;