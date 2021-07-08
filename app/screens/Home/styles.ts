import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native"
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#171717", 
  },
  itemStyle: {
    flex:1/2,
    padding:10,
    margin:5, 
    height:height/2.5,
    width:width/2.5,
    backgroundColor:"#000"
  }, 
  flatContainer :{
    flex:1, 
    justifyContent:"center",
    width:"100%"
  },
  flatStyle:{
    flex :1,
    width:"100%"
  }
});

export default styles;
