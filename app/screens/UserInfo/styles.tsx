import ApiConfig from 'app/config/api-config'
import AppStyles from 'app/config/styles'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10, 
  },
  avaContainer: {
    flex:1, 
    justifyContent:"flex-end",
    padding: '1%',
    backgroundColor:"rgba(0,0,0,0.5)"
  },
  avaStyle: {
    width: 100,
    height: 100,
    borderColor:'red', 
    borderWidth:1
  },
  coverStyle:{
    width:"100%",
    height:"100%",
  },
  infoContainer:{
  marginTop:5,
  flex:2,
  backgroundColor:"rgba(0,0,0,0.7)", 
  }, 
  avaTextStyle :{
  fontSize:AppStyles.fontSize.MEDIUM, 
  color:"#fff", 
  fontFamily:"fantasy"
  },
  rowBack:{
    backgroundColor:"red"
  }

})
