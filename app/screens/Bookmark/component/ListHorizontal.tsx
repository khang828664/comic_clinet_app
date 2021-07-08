import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { styles } from './styles'
import { hardData } from '../hardData'
import NavigationService from 'app/navigation/NavigationService'
import Icon from 'react-native-vector-icons/FontAwesome5'
import App from 'app/navigation/NavigationStack'
import AppStyles from 'app/config/styles'
import ApiConfig from 'app/config/api-config'

const ListBookmarkH = ({ data, ...props }: any) => {
  const [window, setWindow] = useState(Dimensions.get("screen"))
  const [isHorizontal, setIsHorizontal] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const changeToComic = (param: string) => {
    NavigationService.navigate("ComicInfo", { _id: param })
  }
  const reload = (param: string) => {
    console.log(param)
  }
  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => changeToComic(item._id)}
        >
          <Image source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + item.Cover }} style={{ width: "100%", height: window.height / 3, resizeMode: "stretch" }} />
          <View style={styles.subItemContainer}>
            <Text style={styles.subIndexTextStyle}>{index}</Text>
            <Icon name="bookmark" color="#ce1212" solid={true}
              onPress={() => reload(item._id)}
              size={AppStyles.fontSize.MEDIUM}
            />
          </View>
          <View style={styles.subContentContainer}>
            <Text numberOfLines={1} style={styles.subNameTextStyle}>{item.Name}</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap-reverse" }} >
              {item.Author.map((item: any) => <>
                <Text style={[styles.subAuthorTextStyle,
                {
                  paddingHorizontal: 2, color: "rgba(255,255,255,0.7)"
                }]}>
                  {item} /
                </Text>
              </>)}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View
      style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item, index)=>index.toString()}
      ></FlatList>
      <Searchbar
        style={styles.subSearchBarHorizontal}
      />
    </View>
  )
}
export default ListBookmarkH
