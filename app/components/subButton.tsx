import React from 'react'
import { View, Button } from 'react-native'
export const SubButton: React.FC  = () => {
  return <View>
    <Button
      title="Button"
      onPress={()=>console.log("Press")}
    >Login</Button>
  </View>
}
