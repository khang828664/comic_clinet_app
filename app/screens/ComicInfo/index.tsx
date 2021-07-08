import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import { loadComicInfoAction } from 'app/store/actions/ComicActions';
import *as loginActions from 'app/store/actions/loginActions'
import { styles } from './styles';
import { Tag, Bookmark, Author, TabChapterNavigator, Like, Dislike, Name } from "./component";
import AppStyles from "app/config/styles";
import { IComicInfoState } from 'app/models/reducers/comicInfo'
import { ILoginState } from 'app/models/reducers/login'
import { ILoading } from 'app/models/reducers/loading'
import FastImage from 'react-native-fast-image'
import 'intl';
import 'intl/locale-data/jsonp/en';
import NavigationService from "app/navigation/NavigationService";
import ApiConfig from "app/config/api-config";
import *as serviceComic from 'app/services/Comic'
import { Rate } from './Component/index'
interface typeRoute {
  route: {
    params: {
      Name: string,
      _id: string
    }
  }
}
interface stateType {
  infoComicReducer: IComicInfoState
  loadingReducer: ILoading
  loginReducer: ILoginState
}
const ComicInfo = ({ route }: typeRoute) => {

  const [_id] = useState(route.params._id)
  const [bookmark, setBookmark] = useState(false)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const listChapter = useSelector((state: stateType) => state.infoComicReducer.chapterList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadComicInfoAction.requestInfoComic(_id))
    const check = _userBookmark.indexOf(_id)
    if (check < 0) {
      setBookmark(false)
    } else {
      setBookmark(true)
    }
    // Set bookmark
  }, [])
  const loadSuccess = useSelector((state: stateType) => state.infoComicReducer.loadSuccess)
  const isLoading = useSelector((state: stateType) => state.loadingReducer.isLoading)
  const data = useSelector((state: stateType) => state.infoComicReducer.comicInfo)
  const _idUser = useSelector((state: stateType) => { return (state.loginReducer.userInfo ? state.loginReducer.userInfo._id : "") })
  const _userBookmark = useSelector((state: stateType) => { return (state.loginReducer.userInfo ? state.loginReducer.userInfo.Bookmark : []) })
  // Image Comic get
  const changeUserCover = (param: string) => {
    Alert.alert(
      "Waring",
      "Do you want to change cover",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            dispatch(loginActions.setCover(param))
          }
        }
      ]
    )
    dispatch(loginActions.setCover(param))
  }
  const changeToComicRead = () => {
    // 
    ///Check list chapter
    ////
    if (listChapter.length > 0) {
      NavigationService.navigate("ComicRead", { Image: listChapter[0].Image })
    }
  }
  // dislike and like comic
  const BookmarkFunction = () => {
    if (!bookmark) {
      dispatch(loginActions.updateBookmark({ _idComic: _id, status: !bookmark }))
      setBookmark(!bookmark)
    } else {
      dispatch(loginActions.updateBookmark({ _idComic: _id, status: !bookmark }))
      setBookmark(!bookmark)
    }
    // bookmark comic
    serviceComic.Bookmark(_id, _idUser)
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={AppStyles.color.COLOR_BLACK}
      />
      {
        (!loadSuccess) ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator
              animating={isLoading}
              size="large"
              color="red"
            />
          </View>) : (
          <FastImage
            source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + data?.Cover }}
            style={{ width: "100%", height: "100%" }}
            resizeMode={FastImage.resizeMode.stretch}
          >
            <ScrollView style={{
              backgroundColor: AppStyles.color.COLOR_BLACK_TRANS_3,
              padding: "2%"

            }}>
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10


              }}>
                <Rate data={data?.Rate} name={"star"} />
                <Rate data={data?.View} name={"eye"} />
              </View>
              <View style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}>
                <TouchableOpacity
                  onPress={() => {
                    let cover = (data) ? data.Cover : ""
                    changeUserCover(cover)
                  }}

                >
                  <FastImage
                    source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + data?.Cover }}
                    style={{
                      width: 150,
                      height: 250,
                      borderColor: AppStyles.color.COLOR_BLACK_TRANS_2,
                      borderWidth: 5
                    }}
                  />
                </TouchableOpacity>
                <View>
                  <Author
                    style={{ paddingLeft: "2%" }}
                    author={data?.Author}
                  />
                  <Tag
                    tags={data?.Tag}
                    style={{ paddingLeft: "2%" }}
                  />
                </View>
              </View>
              <View style={{ flex: 2 }}>
                <Name
                  numberOfLines={2}
                  name={data?.Name} />
                <Text style={{
                  color: AppStyles.color.COLOR_WHITE
                }}>
                  {data?.Description}
                </Text>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingVertical: "2%"
                }}>
                  <Bookmark
                    onPress={() => { BookmarkFunction() }}
                    isCheck={bookmark}
                  />
                  <Like
                    likenNumber={data?.Like}
                  />
                  <Dislike
                    dislikeNumber={data?.Dislike}
                  />
                </View>
              </View>
              <TabChapterNavigator />
            </ScrollView>
          </FastImage>
        )
      }</View>
  );
};
export default ComicInfo;
