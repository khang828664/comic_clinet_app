import { StyleSheet, Keyboard } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#000"
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
    padding: '5%',
    borderColor: "#ff0000",
  },
  inputStyle: {
    flexDirection: 'row',
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    margin: "5%",
    color: "#fff"
  },
  textStyle: {
  },
  titleStyle: {
    alignSelf: "center",
    marginBottom: 10,
  },
  imageStyle: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
  }
});

export default styles;
