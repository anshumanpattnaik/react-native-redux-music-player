import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer:{
    height: hp('12%'),
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  appLabelView:{
    width: wp('80%'),
    justifyContent: 'flex-end',
  },
  appLabel:{
    fontFamily: 'bebas-neue',
    fontSize: 35,
    color: '#D81F26',
    marginBottom: 10,
    marginLeft: 20
  },
  appSearchView:{
    width: wp('20%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appSearchIcon:{
    width: 28,
    height: 28,
    marginBottom: 15,
  },
  tabIndicatorStyle:{
    backgroundColor: '#D81F26'
  },
  tabBarStyles:{
    backgroundColor: '#FFF', 
    height: 50,
  },
  tabLabelStyle:{
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#000',
  }
});