import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  miniPlayerContainer: {
    position: 'absolute',
    bottom: 0,  
    width: wp('100%'),  
    height: hp('15%'),
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#D81F26'
  },
  miniPlayerMusicTitleView:{
    width: wp('100%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPlayerMusicTitleTxt:{
    marginLeft: 70,
    marginRight: 70,
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#FFF',
  },  
  miniPlayerSliderControllerView:{
    height: hp('3%'),
    flexDirection: 'row',
  },
  miniPlayerSliderCurrentTimeView:{
    width: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPlayerSliderCurrentTimeTxt:{
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#FFF',
  },
  miniPlayerSliderView:{
    width: wp('70%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPlayerSliderDurationView:{
    width: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniPlayerSliderDurationTxt:{
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#FFF',
  },
  miniPlayerControllerView:{
    height: hp('8%'),
    flexDirection: 'row',
  },
  miniPlayerThumbsDownView:{
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  miniPlayerThumbsDownCardView:{
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#FFF'
  },
  miniPlayerThumbsDown:{
    width: 15,
    height: 15
  },
  miniPlayerPrevView:{
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  miniPlayerPrevCardView:{
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#FFF'
  },
  miniPlayerPrevImage:{
    width: 20,
    height: 20
  },
  miniPlayerPlayView:{
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  miniPlayerPlayCardView:{
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#FFF'
  },
  miniPlayerPlayImage:{
    width: 25,
    height: 25
  },
  miniPlayerNextView:{
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  miniPlayerNextCardView:{
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#FFF'
  },
  miniPlayerNextImage:{
    width: 25,
    height: 25
  },
  miniPlayerThumbsUpView:{
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  miniPlayerThumbsUpCardView:{
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#FFF'
  },
  miniPlayerThumbsUp:{
    width: 15,
    height: 15
  }
});