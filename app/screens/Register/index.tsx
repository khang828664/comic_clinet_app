import React, { useState } from "react";
import { styles } from './styles'
import { Text, View, KeyboardAvoidingView, ScrollView, useWindowDimensions } from 'react-native'
import { InputText } from 'app/components/Input/index'
import { Title, Checkbox, Button } from 'react-native-paper'
import AppStyles from "app/config/styles";
import { useDispatch, useSelector } from 'react-redux'
import NavigationService from "app/navigation/NavigationService";
import *as loginAction from 'app/store/actions/loginActions'
import { Platform } from "react-native";
import FormRegister from "./RegisterForm/register"


export default function Register() {
  const height = useWindowDimensions().height
  const width = useWindowDimensions().width
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isCheck, setIsCheck] = useState(false)


  //const isSuccess = useSelector((state) => state.registerReducer.isSuccess)
  const registerSuccess = true
  const dispatch = useDispatch()
  const confirm = () => {
    // NavigationService.navigate('conFirmEmail')
    console.log("Confirm ")
    let userData = {
      Username: username,
      Password: password,
      Firstname: firstName,
      Lastname: lastName
    }
    dispatch(loginAction.createAccount(userData))
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <FormRegister
        username={username}
        password={password}
        lastName={lastName}
        firstName={firstName}
        registerSuccess={registerSuccess}
        SetUsername={setUsername}
        SetPassword={setPassword}
        SetFirstName={setFirstName}
        SetLastName={setLastName}
        confirm={()=>confirm()}
      />
    </KeyboardAvoidingView >
  );
}
