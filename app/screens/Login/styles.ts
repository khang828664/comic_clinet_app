import { StyleSheet, Keyboard } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#000",
    padding:'5%'
  },
  login: {
    padding: 8,
    width: 2
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  loginStyle: {
    backgroundColor: "#000",
    justifyContent: "center",
    borderWidth: 2,
    alignSelf: "center",
    width: "70%",
    height: "50%",
    borderColor: "#ff0000",
  },
  inputStyle: {
    flexDirection: 'row',
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    margin: "5%",
    color: "#fff"
  },
  titleStyle: {
    alignSelf: "center",
    marginBottom: 10,
  },
  imageStyle: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
  },
  registerButton:{
  width:'70%',
  alignSelf:"center",
  borderColor:"#01e1ec",
  borderWidth:2
  }, 
  loginButton:{
  margin:5,
  width:"70%",
  alignSelf:"center",
  borderColor:"#ff0000",
  borderWidth:2,
},
IconSocialStyle:{
}
});

export default styles;
