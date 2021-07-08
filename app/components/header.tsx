import React from 'react'
import { View, Button } from 'react-native'
import { Appbar } from 'react-native-paper'
export const Header: React.FC = ({Name,Follower,...props}) => {
  return (
  <View>
    <Appbar.Header
    >
      <Appbar.BackAction
        onPress={props.onPress}
      />
        <Appbar.Action icon="magnify" onPress={()=>console.log("search")} />
        <View></View>
      <Appbar.Action icon="dots-vertical" onPress={()=>console.log('setting')} />
    </Appbar.Header>
  </View >
  );
}
