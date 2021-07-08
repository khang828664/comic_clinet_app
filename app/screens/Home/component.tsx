import React, { useState, useRef } from 'react'
import { FlatList, View, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView, Image, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal';
import styles from '../Home/styles'
import appStyle from 'app/config/styles'
import NavigationService, { navigationRef } from 'app/navigation/NavigationService';
import { Button } from 'react-native-paper';
import ApiConfig from 'app/config/api-config';
import FastImage from 'react-native-fast-image'
interface item {
  index: number,
  item: any,
}
interface propTypes {
  data: any,
}
const { width, height } = Dimensions.get("screen")
export const MostView = ({ data, ...rest }: propTypes) => {
  const [openModel, setOpenModel] = useState(false)
  const [name, setName] = useState("")
  const [author, setAuthor] = useState([])
  const [tags, setTags] = useState([])
  const [description, setDescription] = useState("")
  const [_id, set_id] = useState("")
  const [newChapter, setNewChapter] = useState("")
  const changeToSearchScreen = (param: string) => {
    NavigationService.navigate("Search", param)
  }
  const changeToComicInfoScreen = (param: string) => {
    NavigationService.navigate("ComicInfo", { _id: param })
  }
  const changeToComicRead = (param: string) => {
    NavigationService.navigate("ComicRead", { newChapter: param })
  }
  const item = ({ index, item }: item) => {
    return (
      <TouchableOpacity style={styles.itemStyle}
        onLongPress={() => {
          let index = (item.Chapter) ? item.Chapter.length : 0
          console.log(index)
          setOpenModel(true)
          setName(item.Name)
          setAuthor(item.Author)
          setTags(item.Tag)
          setDescription(item.Description)
          set_id(item._id)
          setNewChapter((item.Chapter) ? item.Chapter[0] : "")
        }
        }
        onPress={() => changeToComicInfoScreen(item._id)}
      >
        <ImageBackground source={{
          uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + item.Cover,
        }}
          imageStyle={{ resizeMode: "stretch" }}
          style={{ flex: 1, width: "100%", height:"100%" }}
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Text style={{ color: "white" }}>{index}</Text>
            <View style={{ alignContent: "flex-end", flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "white" }}>#{(!item.SumChapter ? "current" : item.SumChapter)}</Text>
              <Text style={{ color: "white" }}>#Rate : {(!item.Rate) ? 0 : item.Rate}</Text>
            </View>
          </View>
        </ImageBackground>
        <Text numberOfLines={1} style={{ color: "#fff", fontFamily: "fantasy", fontSize: appStyle.fontSize.MEDIUM }}>
          {item.Name}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <Modal
        testID={'modal'}
        isVisible={openModel}
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={() => setOpenModel(false)}
      >
        <View style={{ height: height / 3, justifyContent: "center", backgroundColor: "black", borderColor: "red", borderWidth: 2, padding: "5%" }}>
          <ScrollView>
            <Text style={{ color: "white", fontFamily: appStyle.fonts.FONT_MEDIUM, fontSize: appStyle.fontSize.MEDIUM }}>{name}</Text>
            {/* Tag Component  */}
            <View style={{ flexDirection: "row", alignItems: "baseline", flexWrap: "wrap" }}>
              <Text style={{ color: "white" }}>Tag:</Text>
              {(tags) ? (tags.map((item, index) => {
                return (
                  <TouchableOpacity style={{ borderColor: "#e31c25", borderWidth: 1, padding: 5, margin: 5 }}
                    onPress={() => changeToSearchScreen(item)}
                  >
                    <Text style={{ color: "#e31c25" }}>{`${item}`}</Text>
                  </TouchableOpacity>
                )
              })) : (<><Text>#UnKnow</Text></>)}
            </View>
            {/* Tag Component  */}
            {/* Author component */}
            <View style={{ flexDirection: "row", alignItems: "baseline", flexWrap: "wrap" }}>
              <Text style={{ color: "white", alignSelf: "center" }}>Author :</Text>
              {(author) ? (author.map((item, index) => {
                return (
                  <TouchableOpacity style={{ borderColor: "#2450ff", borderWidth: 1, padding: 5, margin: 5 }}
                    onPress={() => changeToSearchScreen(item)}
                  >
                    <Text style={{ color: "#2450ff" }}>{`${item}`}</Text>
                  </TouchableOpacity>
                )
              })) : (<><Text>#UnKnow</Text></>)}
            </View>
            {/* Author component */}
            <View>
              <Text style={{ color: "white" }}>Description:</Text>
              <ScrollView>
                <Text style={{ color: "white", textAlign: "auto", fontFamily: appStyle.fonts.FONT_MEDIUM }}>{description}</Text>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
          <Button style={{ alignSelf: "center", backgroundColor: "#1c1c1c" }}
            labelStyle={{ color: "#e31c25" }}
            onPress={
              () => {
                setOpenModel(false)
                changeToComicRead(newChapter)
                console.log(newChapter)
              }}
          >Read now</Button>
          <Button style={{ alignSelf: "center", backgroundColor: "#1c1c1c" }}
            labelStyle={{ color: "#e31c25" }}
            onPress={
              () => {
                setOpenModel(false)
                changeToComicInfoScreen(_id)
              }}
          >Info Comic</Button>
        </View>
      </Modal>
      <FlatList
        onRefresh={() => rest.onRefresh()}
        refreshing={false}
        data={data}
        key={rest.key}
        renderItem={item}
        horizontal={rest.horizontal}
        keyExtractor={item => item._id}
        numColumns={rest.number}
        onEndReached={rest.onEndReached}
        onEndReachedThreshold={0}
        onScrollBeginDrag={rest.onScrollStart}
        onScrollEndDrag={rest.onScrollEnd}
        ListFooterComponent={
          (rest.horizontal) ? (<></>) : (
            <ActivityIndicator
              animating={rest.isLoading}
              size="large" color="#e31c25"
            />)}
      ></FlatList>
    </>
  );
}
