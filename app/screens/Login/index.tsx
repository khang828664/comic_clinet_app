import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, Image, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import *as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import images from 'app/config/images'
import { ILoading } from 'app/models/reducers/loading';
interface IState {
  loginReducer: ILoginState;
  loadingReducer: ILoading
}

const Login: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isKeyboard, setIsKeyboard] = useState(false)
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setIsKeyboard(true))
    Keyboard.addListener("keyboardDidHide", () => setIsKeyboard(false))
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow")
      Keyboard.removeAllListeners("keyboardDidHide")
    }
  }, [])
  // const isLogin =  useSelector((state:IState)=>state.loginReducer.isLoggedIn)
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin(username, password));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onRegister = () => NavigationService.navigate('Register');
  return (
    <View style={styles.container}>
      {/* LogoApp */}
      <View style={styles.titleStyle}>
        {isKeyboard ?
          (<Text style={{ fontWeight: "bold" }}>Comic Fantasy</Text>)
          : (
            <Image
              style={styles.imageStyle}
              source={images.Logo}
            />
          )
        }
      </View>
      {/* Login form */}
      <View style={styles.loginStyle}>
        <Text style={styles.textStyle}>Username</Text>
        <TextInput
          onChangeText={(text: string) => { setUsername(text) }}
          style={styles.inputStyle}
        ></TextInput>
        <Text style={styles.textStyle}>Password</Text>
        <TextInput
          onSubmitEditing={onLogin}
          onChangeText={(text: string) => { setPassword(text) }}
          style={styles.inputStyle}
        ></TextInput>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onRegister}>
          Register Account
        </Button>
      </View>
      {/* Login form */}
    </View>
  );
};

export default Login;
