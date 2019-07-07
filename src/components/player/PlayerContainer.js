import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { connect } from 'react-redux';

import { 
    pauseSongs,
    stopSongs,
    playSongs,
    nextSongs,
    prevSongs 
} from '../../actions';

import Styles from '../../styles/PlayerStyles';

import CardView from 'react-native-cardview';

import Sound from 'react-native-sound';

import MarqueeText from 'react-native-marquee';
import { LinearTextGradient } from "react-native-text-gradient";

import Slider from '@react-native-community/slider';
import { CLIENT_ID } from '../../actions/constants';

import {getSongDuration, getAudioTimeString} from '../../utils/utils';

class PlayerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songCurrentTime: 0,
            songDuration: 0,
            playerBounceValue: new Animated.Value(1000),
            miniPlayerBounceValue: new Animated.Value(1000),
        }
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.stop = this.stop.bind(this)
        this.nextSongs = this.nextSongs.bind(this);
        this.prevSongs = this.prevSongs.bind(this);
    }

    componentWillMount(){
    
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        if(this.sound){
            this.sound.release();
            this.sound = null;
        }
        if(this.timeout){
            clearInterval(this.timeout);
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.player.track !== null && prevProps.player.track !== this.props.player.track) {
          this.startSong();
        }
    }

    play() {
        this.props.playSongs();
        if(this.sound){
            this.sound.play(this.playComplete);
        }
    }
    
    pause() {
        this.props.pauseSongs();
        if(this.sound){
           this.sound.pause();
        }
    }
    
    stop() {
        this.props.stopSongs();
        if(this.sound){
           this.sound.stop();
        }
    }
    
    nextSongs() {
        this.props.nextSongs();
    }

    prevSongs() {
        this.props.prevSongs();
    }
    
    startSong() {
        if(this.sound){
            this.sound.stop();
        }
        const {track} = this.props.player;
        const songUrl = track.stream_url+'?client_id='+CLIENT_ID;
        console.log('SongUrl : '+songUrl);

        this.sound = new Sound(songUrl, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
            }else{
                this.sound.play(this.playComplete);
                this.timeout = setInterval(() => {
                    console.log('SongInterVal : '+ this.sound+" === "+this.sound.isLoaded());
                    if(this.sound && this.sound.isLoaded()){
                        this.sound.getCurrentTime((seconds, isPlaying) => {
                            console.log('SongInterVal : getCurrentTime....'+seconds+" -- "+this.sound.getDuration());
                            this.setState({
                                songDuration: this.sound.getDuration(),
                                songCurrentTime: seconds
                            })
                        })
                    }
                }, 500);
            }
        });
    }

    hideMiniPlayerControllerPopUp() {
        Animated.spring(
          this.state.miniPlayerBounceValue,{
            toValue: 1000,
            velocity: 3,
            tension: 2,
            friction: 8,
          }
        ).start();
    }
    
    enabledMiniPlayerControllerPopUp() {
        Animated.spring(
          this.state.miniPlayerBounceValue,{
            toValue: 0,
            velocity: 3,
            tension: 2,
            friction: 8,
          }
        ).start();
    }

    songController(isPlaying){
        if(isPlaying){
            this.pause();
        }else{
            this.play();
        }
    }

    hidePlayerControllerPopUp() {
        Animated.spring(
          this.state.playerBounceValue,{
            toValue: 1000,
            velocity: 3,
            tension: 2,
            friction: 8,
          }
        ).start();
    }
    
    enabledPlayerControllerPopUp() {
        Animated.spring(
          this.state.playerBounceValue,{
            toValue: 0,
            velocity: 3,
            tension: 2,
            friction: 8,
          }
        ).start();
        this.onSetPlayerFullScreen();
    }

    onSliderEditStart = () => {
        this.sliderEditing = true;
    }
    onSliderEditEnd = () => {
        this.sliderEditing = false;
    }
    onSliderEditing = value => {
        if(this.sound){
            this.sound.setCurrentTime(value);
            this.setState({songCurrentTime:value});
        }
    }

    onSongPausePlayControl(isPlaying){
        if(isPlaying){
            this.pause();
        }else{
            this.play();
        }
    }

    playComplete = (success) => {
        if(this.sound){
          if (success) {
            console.log('successfully finished playing');
            this.props.nextSongs();
          } else {
            console.log('playback failed due to audio decoding errors');
          }
          this.setState({songCurrentTime:0});
          this.sound.setCurrentTime(0);
        }
      }
    
    onSetMiniPlayer(){
        const { player } = this.props;
        const currentSongTime = getAudioTimeString(this.state.songCurrentTime);
        
        return(
            <View
                style={Styles.miniPlayerContainer}>
                <CardView 
                    style={Styles.miniPlayerContainer}
                    cardElevation={10}
                    cornerRadius={0}>
                    <View style={Styles.miniPlayerMusicTitleView}>
                        <Text 
                            style={Styles.miniPlayerMusicTitleTxt}
                            numberOfLines={1}>
                            {player.track.title}
                        </Text>
                    </View>    
                    <View style={Styles.miniPlayerSliderControllerView}>
                        <View style={Styles.miniPlayerSliderCurrentTimeView}>
                            <Text style={Styles.miniPlayerSliderCurrentTimeTxt}>
                                {currentSongTime}
                            </Text>
                        </View>
                        <View style={Styles.miniPlayerSliderView}>
                            <Slider
                                style={Styles.miniPlayerSliderView}
                                onTouchStart={this.onSliderEditStart}
                                onTouchEnd={this.onSliderEditEnd}
                                onValueChange={this.onSliderEditing}
                                value={this.state.songCurrentTime} 
                                maximumValue={this.state.songDuration} 
                                thumbTintColor="#FFF"
                                minimumTrackTintColor="#FFF"
                                maximumTrackTintColor="#FF8E92"/>
                        </View>
                        <View style={Styles.miniPlayerSliderDurationView}>
                            <Text style={Styles.miniPlayerSliderDurationTxt}>
                                {getSongDuration(player.track.duration)}
                            </Text>
                        </View>
                    </View>    
                    <View style={Styles.miniPlayerControllerView}>
                        <View style={Styles.miniPlayerThumbsDownView}>
                            <CardView 
                                style={Styles.miniPlayerThumbsDownCardView}
                                cardElevation={1}
                                cornerRadius={50}>
                                <Image
                                    style={Styles.miniPlayerThumbsDown}
                                    tintColor={'#D81F26'}
                                    source={require('../../../assets/icons/ic_outline_thumb_down.png')}
                                />
                            </CardView> 
                        </View>
                        <View style={Styles.miniPlayerPrevView}>
                            <TouchableOpacity onPress={this.prevSongs.bind(this)}>
                                <CardView 
                                    style={Styles.miniPlayerPrevCardView}
                                    cardElevation={1}
                                    cornerRadius={50}>
                                    <Image
                                        style={Styles.miniPlayerPrevImage}
                                        tintColor={'#D81F26'}
                                        source={require('../../../assets/icons/ic_skip_previous.png')}
                                    />
                                </CardView>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.miniPlayerPlayView}>
                            <TouchableOpacity onPress={this.onSongPausePlayControl.bind(this, player.statusPlaying)}>
                                <CardView 
                                    style={Styles.miniPlayerPlayCardView}
                                    cardElevation={1}
                                    cornerRadius={50}>
                                    <Image
                                        style={Styles.miniPlayerPlayImage}
                                        tintColor={'#D81F26'}
                                        source={player.statusPlaying?require('../../../assets/icons/ic_pause_white.png'):
                                            require('../../../assets/icons/ic_play_white.png')}
                                    />    
                                </CardView>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.miniPlayerNextView}>
                            <TouchableOpacity onPress={this.nextSongs.bind(this)}>
                                <CardView 
                                    style={Styles.miniPlayerNextCardView}
                                    cardElevation={1}
                                    cornerRadius={50}>
                                    <Image
                                        style={Styles.miniPlayerNextImage}
                                        tintColor={'#D81F26'}
                                        source={require('../../../assets/icons/ic_skip_next.png')}
                                    />
                                </CardView>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.miniPlayerThumbsUpView}>
                            <CardView 
                                style={Styles.miniPlayerThumbsUpCardView}
                                cardElevation={1}
                                cornerRadius={50}>
                                <Image
                                    style={Styles.miniPlayerThumbsUp}
                                    tintColor={'#D81F26'}
                                    source={require('../../../assets/icons/ic_outline_thumb_up.png')}
                                />
                            </CardView> 
                        </View>
                    </View>    
                </CardView>  
            </View>
        )
    }

    render(){
        const { player } = this.props;
        return(
            <View>
                {player.track !== null && player.track.title != null ?
                    this.onSetMiniPlayer()
                :null}
            </View>
        );
    }
}

const playerState = state => ({
    player: state.player,
})

const dispatchProps = dispatch => ({
    pauseSongs: () => dispatch(pauseSongs()),
    stopSongs: () => dispatch(stopSongs()),
    playSongs: () => dispatch(playSongs()),
    nextSongs: () => dispatch(nextSongs()),
    prevSongs: () => dispatch(prevSongs())
})

export default connect(playerState, dispatchProps)(PlayerContainer);