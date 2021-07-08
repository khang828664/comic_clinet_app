import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { Searchbar } from 'react-native-paper'
const UserSearch = () => {
  const [searchValue, setSearchValue] = useState("")
  const findUser = () => {
  }
  return (

    <View style={styles.container}>
      <Searchbar
        onChangeText={(text: string) => { setSearchValue(text) }}
        value={searchValue}
      />
      <Text> UserInfo</Text>
    </View>
  )
}
export default UserSearch
