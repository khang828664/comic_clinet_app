import { InputText } from 'app/components/Input';
import AppStyles from 'app/config/styles';
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import { styles } from './style'
export default function FormRegister({ ...props }) {
  const {
    username,
    password,
    firstName,
    lastName,
    confirm,
    registerSuccess,
    SetUsername,
    SetPassword,
    SetFirstName,
    SetLastName,
  } = props
  return (
    <ScrollView style={styles.inputForm}>
      <Text
        style={{
          fontFamily: "fantasy",
          fontSize: AppStyles.fontSize.MEDIUM,
          color: "red"
        }}
      >
        Create an account
      </Text>
      <InputText
        title={"Username"}
        value={username}
        onChangeText={(username: string) => SetUsername(username)}
        nameIcon={"user"}
        size={25}
        fontSize={25}
      />
      <InputText
        title={"Password"}
        value={password}
        onChangeText={(password: string) => SetPassword(password)}
        nameIcon={"key"}
        size={25}
        fontSize={25}
      />
      <InputText
        title={"First name"}
        value={firstName}
        onChangeText={(firstName: string) => SetFirstName(firstName)}
        nameIcon={"meh"}
        size={25}
        fontSize={25}
      />
      <InputText
        title={"Last name"}
        value={lastName}
        onChangeText={(lastName: string) => SetLastName(lastName)}
        nameIcon={"meh"}
        size={25}
        fontSize={25}
      />
      <Button
        mode="contained"
        onPress={() => confirm()}
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
    </ScrollView>
  );
}
