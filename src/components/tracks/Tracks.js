import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import CardView from 'react-native-cardview';

import Styles from '../../styles/TrackStyles';

import { selectSongs,nextSongs, prevSongs } from '../../actions';

import {getSongDuration} from '../../utils/utils';

import Slider from '@react-native-community/slider';

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTitle: null
        }
    }

    componentDidMount(){
        
    }

    renderSeparator = () => (
        <View
          style={{
            backgroundColor: '#CACACA',
            height: 0.5,
          }}
        />
    );

    onSelectSong(track){
        console.log('FlatList Selected Songs : onSelectSong....')
        this.setState({
            selectedTitle: track.title
        })
        this.props.selectSongs(track, this.props.tracks);
    }

    renderTrackItems(item){
        if(this.props.player.track!=null){
            console.log('FlatList Selected Songs : renderTrackItems....'+this.props.player.track.title+" == "+this.state.selectedTitle)
        }
        return(
            <TouchableOpacity onPress={this.onSelectSong.bind(this, item)}>
                <View styles={Styles.trackContainer}>
                    <View 
                        style={this.props.player.track!=null && this.props.player.track.title == item.title?
                            Styles.trackCardContainerSelectedView:
                            Styles.trackCardContainerView}>
                        <View style={Styles.trackThumbCardView}>
                            <Image
                                style={Styles.trackThumb}
                                source={{uri: item.artwork_url ? 
                                    item.artwork_url.replace('-large', '-t500x500') : 
                                    item.user.avatar_url.replace('-large', '-t500x500')}}
                            />
                        </View>
                        <View style={Styles.trackTileView}>
                            <Text 
                                style={Styles.tracksTitle}
                                numberOfLines={1}>
                                {item.title}
                            </Text>
                            <Text 
                                style={Styles.tracksGenre}
                                numberOfLines={1}>
                                {item.genre!=""?item.genre:item.user.username}
                            </Text>
                        </View>  
                        <View style={Styles.trackDurationView}>
                            <Text 
                                style={Styles.tracksDurationTxt}>
                                {getSongDuration(item.duration)}
                            </Text>
                        </View>      
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <FlatList
                style={this.state.selectedTitle?{marginBottom: 120}:{marginBottom: 0}}
                data={this.props.tracks}
                extraData={this.state}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                    this.renderTrackItems(item)
                }
                keyExtractor={item => ""+item.id}
            />
        );
    }
}

const stateProps = state => ({
    tracks: state.tracks,
    player: state.player
});

const dispatchToProps = dispatch => ({
    selectSongs: (track,tracks) => dispatch(selectSongs(track,tracks)),
})
  
export default connect(stateProps,dispatchToProps)(Tracks);