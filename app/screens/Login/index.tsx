import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, Image, Alert, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import *as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import images from 'app/config/images'
import { ILoading } from 'app/models/reducers/loading';
import Icons from 'react-native-vector-icons/FontAwesome'
import FormLogin from './Form/LoginForm'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppStyles from 'app/config/styles';
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
      <FormLogin
        SetUsername={(text: string) => { setUsername(text) }}
        SetPassword={(text: string) => { setPassword(text) }}
      />
      {/* Login form */}
      <Button
        mode='outlined'
        onPress={onLogin}
        labelStyle={{ fontSize: 20 }}
        style={styles.loginButton}
      >Login</Button>
      <Button
        mode="outlined"
        style={styles.registerButton}
        labelStyle={{ fontSize: 12 }}
        onPress={onRegister}>
        Register Account
      </Button>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "20%",
        margin: "2.5%"
      }}>
        <Icons name="facebook"
          size={20}
          style={styles.IconSocialStyle}
          color='#ff0000'
          onPress={() => console.log("login facebook")} />
        <Icons name="google"
          size={20}
          style={styles.IconSocialStyle}
          color='#ff0000'
          onPress={() => console.log("login google")}
        />
        <Icons name="twitter"
          size={20}
          style={styles.IconSocialStyle}
          color='#ff0000'
          onPress={() => console.log("login twitter")}
        />
      </View>
      <View style={{
        alignSelf: "flex-end",
        justifyContent: "center",

      }}>
        <TouchableOpacity
          onPress={onForgot}
        >
          <Text
            style={{
              color: AppStyles.color.COLOR_BLUE
            }}
          >Forget password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
