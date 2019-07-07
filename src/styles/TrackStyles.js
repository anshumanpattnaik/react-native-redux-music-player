import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  trackContainer: {
    width: wp('100%'),
    height: hp('10%'),
  },
  trackCardContainerView:{
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
  },
  trackCardContainerSelectedView:{
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
    backgroundColor: '#E5E5E5'
  },
  trackThumbCardView:{
    width: wp('20%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackThumb:{
    width: 50,
    height: 50,
    borderRadius: 3
  },
  trackTileView:{
    width: wp('60%'),
    height: hp('10%'),
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5
  },
  tracksTitle:{
    width: 250,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#000',
    textAlign: 'left'
  },
  tracksGenre:{
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#808080',
    textAlign: 'left',
    marginTop: 3
  },
  trackDurationView:{
    width: wp('20%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  tracksDurationTxt:{
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#000',
  }
});