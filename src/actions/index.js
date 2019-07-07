import {
    BASE_URL,
    CLIENT_ID,
    FETCH_TRACKS,
    SELECT_SONGS,
    PAUSE_SONGS,
    PLAY_SONGS,
    STOP_SONGS,
    NEXT_SONGS,
    PREV_SONGS
} from './constants';


export const fetchTracksSuccess = data => ({
    type: FETCH_TRACKS,
    payload: data,
});

export const fetchPlaylistsSuccess = data => ({
    type: FETCH_PLAYLISTS,
    payload: data,
});

export const fetchTracks = () => dispatch => {
    fetch(BASE_URL+'/tracks?client_id='+CLIENT_ID+'&filter=public')
        .then(res => res.json())
        .then(data => dispatch(fetchTracksSuccess(data)))
        .catch(err => {console.log(err)})
}

export const selectSongs = (track, tracks) => ({
    type: SELECT_SONGS,
    payload: {track, tracks}
})

export const pauseSongs = () => ({
    type: PAUSE_SONGS,
    payload: 'paused',
})

export const stopSongs = () => ({
    type: STOP_SONGS,
    payload: 'stopped',
})
  
export const playSongs = () => ({
    type: PLAY_SONGS,
    payload: 'played',
})
  
export const nextSongsPlaying = (track) => ({
    type: NEXT_SONGS,
    payload: track,
})
  
export const nextSongs = () => (
    (dispatch, getState) => {
      const { player } = getState();
      const currentIdx = player.playList.findIndex( x => player.track.id === x.id);
      const nextSong = player.playList[currentIdx + 1];
      if(nextSong!=null){
        return dispatch(nextSongsPlaying(nextSong));
      }
    }
)

export const prevSongsPlaying = (track) => ({
    type: PREV_SONGS,
    payload: track,
})
  
export const prevSongs = () => (
    (dispatch, getState) => {
      const { player } = getState();
      const currentIdx = player.playList.findIndex( x => player.track.id === x.id);
      const prevSong = player.playList[currentIdx - 1];
      if(prevSong!=null){
        return dispatch(prevSongsPlaying(prevSong));
      }
    }
)