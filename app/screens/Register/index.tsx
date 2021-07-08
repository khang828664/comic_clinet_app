import React, { useState } from "react";
import { styles } from './styles'
import { Text, View } from 'react-native'
import { InputText } from 'app/components/Input/index'
import { Title, Checkbox, Button } from 'react-native-paper'
import AppStyles from "app/config/styles";
import { useDispatch, useSelector } from 'react-redux'
import NavigationService from "app/navigation/NavigationService";
import *as loginAction from 'app/store/actions/loginActions'

export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isCheck, setIsCheck] = useState(false)


  // const isSuccess = useSelector((state) => state.registerReducer.isSuccess)
  const registerSuccess = true
  const dispatch = useDispatch()
  const comFirm = () => {
    // NavigationService.navigate('conFirmEmail')
    console.log("Confirm ")
    let userData = {
      Username:username,
      Password:password,
      Firstname:firstName,
      Lastname:lastName
    }
    
    dispatch(loginAction.createAccount(userData))
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputForm}>
        <Text
          style={{
            fontFamily: "fantasy", 
            fontSize:AppStyles.fontSize.MEDIUM, 
            color:"red"
          }}
        >
          Create an account
        </Text>
        <InputText
          title={"Username"}
          value={username}
          onChangeText={(username: string) => setUsername(username)}
          nameIcon={"user"}
          size={25}
          fontSize={25}
        />
        <InputText
          title={"Password"}
          value={password}
          onChangeText={(password: string) => setPassword(password)}
          nameIcon={"key"}
          size={25}
          fontSize={25}
        />
        <InputText
          title={"First name"}
          value={firstName}
          onChangeText={(firstName: string) => setFirstName(firstName)}
          nameIcon={"meh"}
          size={25}
          fontSize={25}
        />
        <InputText
          title={"Last name"}
          value={lastName}
          onChangeText={(lastName: string) => setLastName(lastName)}
          nameIcon={"meh"}
          size={25}
          fontSize={25}
        />
        <Button
          mode="contained"
          onPress={comFirm}
          loading={!registerSuccess}
          style={{
            backgroundColor: "red",
            marginTop: 10,
            justifyContent: "flex-end"
          }}
          labelStyle={{
            fontSize: AppStyles.fontSize.MEDIUM
          }}
        >
          Create
             </Button>

      </View>

    </View>
  );
}
