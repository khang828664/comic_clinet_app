import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { styles } from './styles'
import NavigationService from 'app/navigation/NavigationService'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppStyles from 'app/config/styles'
import ApiConfig from 'app/config/api-config'
import *as Services from 'app/services/Comic'
import * as ComicAction from 'app/store/actions/ComicActions'
import * as  loginActions from 'app/store/actions/loginActions'
import { useDispatch, useSelector } from 'react-redux'

const ListBookmark = ({ data, ...props }: any) => {
  const [window, setWindow] = useState(Dimensions.get("screen"))
  const [isHorizontal, setIsHorizontal] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [stateData, setStateData] = useState(data)
  const [onSearch, setOnSearch] = useState(false)
  const [sortUp, setSortUp] = useState(false)
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.loginReducer.userInfo._id)
  const changeToComic = (param: string) => {
    NavigationService.navigate("ComicInfo", { _id: param })
  }
  useEffect(() => {
    if (searchValue.length > 0) {
      searchFunction()
      setOnSearch(true)
    } else {
      setStateData(data)
      setOnSearch(false)
    }
  }, [searchValue])
  const searchFunction = () => {
    // Filter find Item
    let OptimizeSting = searchValue.trim().toUpperCase()
    let tempData = data.filter((item: any) => (item.Name.toUpperCase().search(OptimizeSting) >= 0))
      .map((item: any) => item);
    setStateData(tempData)
  }
  const unBookmark = async (param: string) => {
    await Services.Bookmark(param, userId)
    dispatch(loginActions.updateBookmark({ _idComic: param, status: false }))
    dispatch(ComicAction.bookmarkListAction.requestListBookmark(userId))
  }
  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.itemContainer} key={index.toString()}>
        <TouchableOpacity
          onPress={() => changeToComic(item._id)}
        >
          <View>
            <Image source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + item.Cover }} style={{ width: "100%", height: window.height / 3, resizeMode: "stretch" }} />
            <View style={[styles.subItemContainer, { justifyContent: "flex-end" }]}>
              <Icon name="bookmark" color="#ce1212" solid={true}
                onPress={() => unBookmark(item._id)}
                size={AppStyles.fontSize.MEDIUM}
              />
            </View>
            <View style={[styles.subItemContainer, { backgroundColor: "rgba(0,0,0,0.7)", bottom: 0, flexDirection: "column" }]}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.subIndexTextStyle}>{index + 1}.</Text>
                <Text style={styles.subIndexTextStyle}>Current:#{item.LastChapter}</Text>
              </View>
              <View style={styles.subContentContainer}>
                <Text numberOfLines={1} style={styles.subNameTextStyle}>{item.Name}</Text>
                <View style={{ flexDirection: "row" }} >
                  {item.Author.map((item: any, index: any) => <View key={index.toString()}>
                    <Text style={[styles.subAuthorTextStyle,
                    {
                      paddingHorizontal: 2, color: "rgba(255,255,255,0.7)"
                    }]}>
                      {item} /
                </Text>
                  </View>)}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View
      style={styles.container}>
      <Searchbar
        placeholder={"Name or author"}
        value={searchValue}
        style={styles.search}
        onChangeText={(text: string) => setSearchValue(text)}
      />
        <FlatList
          data={stateData}
          onEndReachedThreshold={0.2}
          onEndReached={() => console.log("reach")}
          numColumns={2}
          renderItem={renderItem}
          onRefresh={props.onRefresh}
          refreshing={false}
          onScrollToTop={() => console.log("scroll to top")}
          keyExtractor={(item, index) => index.toString()}
          key={"1"}
        ></FlatList>
    </View>
  )
}
export default ListBookmark
