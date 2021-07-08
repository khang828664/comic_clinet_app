import { styles } from './styles'
import React, { } from 'react'
import { Subheading, TextInput, } from 'react-native-paper'
import { View } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'

interface propType {
  title: string
  value: string
  onChangeText: Function
  nameIcon: string
  size: number
  fontSize: number
}
export const InputText = (props: propType) => {
  const  a  = "fuck"
  return (
    <>
      <View style={styles.labelContainer}>
        <Icons name={props.nameIcon} size={props.size} 
          color={"red"}
          solid ={true}
          onPress={()=>props.loadA(a)}
        />
        <Subheading style={[styles.headingStyle, { fontSize: 20 }]}>
          {props.title}
        </Subheading>
      </View>
      <TextInput
        mode="outlined"
        placeholder={props.title}
        onChangeText={(Text: string) => props.onChangeText(Text)}
      >
      </TextInput>
    </>
  )
}
