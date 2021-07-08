import AppStyles from 'app/config/styles'
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export const Rate = ({ data, name }: any) => {
  return (
    <View style={{
      backgroundColor: AppStyles.color.COLOR_BLACK_TRANS_2,
      flexDirection:"row",
      padding: 3,
      justifyContent:"space-around",
      alignItems:"center",
    }}
    >
      <Text style={{color:AppStyles.color.COLOR_WHITE,paddingHorizontal:3}}>{data}</Text>
      <Icon name={name} size={AppStyles.fontSize.SMALL} color={AppStyles.color.COLOR_WHITE} />
    </View>
  )
}
