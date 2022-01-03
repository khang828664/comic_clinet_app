import AppStyles from 'app/config/styles'
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './style'
export default function FormLogin({ ...props }: any) {
  // form Login
  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.TextStyle}>USERNAME</Text> */}
        <TextInput
          placeholder='USERNAME'
          placeholderTextColor={AppStyles.color.COLOR_GREY_TRANSP}
          style={styles.InputStyle}
          onChangeText={(text: string) => props.SetUsername(text)}
        />
      </View>
      <View>
        {/* <Text style={styles.TextStyle}>PASSWORD</Text> */}
        <TextInput
          placeholder='PASSWORD'
          placeholderTextColor={AppStyles.color.COLOR_GREY_TRANSP}
          style={styles.InputStyle}
          onChangeText={(text: string) => props.SetPassword(text)}
        />
      </View>
    </View>
  )
}
