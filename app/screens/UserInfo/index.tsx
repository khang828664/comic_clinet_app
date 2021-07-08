import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Modal,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import NavigationService from 'app/navigation/NavigationService'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppStyles from 'app/config/styles'
import * as loginActions from 'app/store/actions/loginActions'
import ApiConfig from 'app/config/api-config'
import { SwipeListView } from 'react-native-swipe-list-view';
import { deleteComic } from './services'
import { Alert } from 'react-native'

const UserInfo = () => {
  const [searchValue, setSearchValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [userInfo, setUserInfo] = useState(useSelector((state: any) => state.loginReducer.userInfo))
  const Avatar = useSelector((state: any) => state.loginReducer.userInfo.Avatar)
  const UserFirstname = useSelector((state: any) => state.loginReducer.userInfo.Firstname)
  const UserLastname = useSelector((state: any) => state.loginReducer.userInfo.Lastname)
  const ListPost = useSelector((state: any) => state.loginReducer.listPost)
  const name = `${UserFirstname} ${UserLastname}`
  const shortDescript = useSelector((state: any) => state.loginReducer.userInfo.SortDescription)
  const cover = useSelector((state: any) => state.loginReducer.userCover)
  const dispatch = useDispatch()
  const findUser = () => {
  }
  useEffect(() => {
    dispatch(loginActions.requestUpdateListPost(userInfo._id))
    console.log("load")
  }, [])
  const changeToInfo = (param: string) => {
    NavigationService.navigate("ComicInfo", { _id: param })
  }
  const onLogout = () => dispatch(loginActions.logOut());
  const changeToCreateNew = () => {
    NavigationService.navigate("CreateComic", userInfo._id)
  }
  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={{
        flex: 1,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.5)",
        marginVertical: 2

      }}
        onPress={() => {
          changeToInfo(item._id)
        }}
      >
        <View>
          <Image source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + item.Cover }} style={[styles.avaStyle, { height: 150 }]} />
          <View style={{
            padding: 2,
            position: "absolute",
            flexDirection: "row",
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            left: 0,
            right: 0,
          }}>
            <Icon name="eye" color={"#fff"} />
            <Text style={{
              color: "#fff",
              marginLeft: 2
            }}>{item.View}</Text>
          </View>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 5 }}>
          <Text numberOfLines={1} style={{ color: "#fff", fontSize: AppStyles.fontSize.MEDIUM, fontFamily: "fantasy" }}>{item.Name}</Text>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Author:</Text>
            {
              item.Author.map((item: any, index: number) =>
                <View key={index.toString()}>
                  <Text style={{ color: "#fff", marginHorizontal: 5 }}>{item}</Text>
                </View>
              )
            }</View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Tag:</Text>
            {(item.Tag.length > 0 ? (
              item.Tag.map((item: any, index: number) =>
                <View key={index.toString()}>
                  <Text style={{ color: "#fff", marginHorizontal: 5 }}>{item}</Text>
                </View>)
            ) : (<></>))
            }</View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="thumbs-up" size={15} solid={true} color={"#fff"} />
            <Text style={{ color: "#fff", fontSize: 15 }}>{item.like}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="thumbs-down" size={15} solid={true} />
            <Text style={{ fontSize: 15 }}>{item.dislike}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  const renderSwip = ({ item }: any) => {
    return (
      <View
        style={{
          flex: 1, paddingVertical: '3%',
          marginHorizontal: '2%',
          width: "25%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 2
          }}
          onPress={async () => {
            let a = await deleteComic(item._id)
            if (a.result){
              Alert.alert("Success","Delete Success")
            }
            dispatch(loginActions.requestUpdateListPost(userInfo._id))
          }}
        ><Text
          style={{
            fontFamily: "fantasy",
            fontWeight: "bold",
            color: AppStyles.color.COLOR_WHITE,
            borderRadius: 30,
          }}
        >DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: AppStyles.color.COLOR_BLUE_LOW, flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 2

          }}
          onPress={() => {
            NavigationService.navigate("UpdateComic", item)
          }}
        ><Text
          style={{
            fontFamily: "fantasy",
            fontWeight: "bold",
            color: AppStyles.color.COLOR_WHITE,
            borderRadius: 30,
          }}
        >UPDATE</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const onRefresh = () => dispatch(loginActions.requestUpdateListPost(userInfo._id))
  return (
    <ImageBackground source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.Cover + cover }} style={styles.coverStyle}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={onLogout}
            style={{
              backgroundColor: "red",
              alignItems: "center",
              width: "50%",
              borderRadius: 5
            }}>
            <Text style={{
              fontSize: AppStyles.fontSize.MEDIUM,
              fontWeight: "bold",
              fontFamily: 'fantasy'
            }}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.avaContainer}
        >
          <TouchableOpacity style={{ flexDirection: "row" }}
            onLongPress={() => setModalVisible(true)}
          >
            <Image source={{ uri: ApiConfig.BASE_URL + ApiConfig.Image.AvatarImage + userInfo.Avatar }}
              style={[styles.avaStyle, { resizeMode: "stretch" }]} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.avaTextStyle}>{name.trim()}</Text>
              <Text numberOfLines={3} style={{ color: "#fff", fontFamily: "fantasy" }}>{shortDescript.trim()}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          title={"Create new Comic"}
          onPress={changeToCreateNew}
          color={AppStyles.color.COLOR_BLUE}
        ></Button>
        <View style={styles.infoContainer}>
          <View style={{ marginBottom: 5, backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Text style={{
              fontSize: AppStyles.fontSize.MEDIUM,
              fontFamily: "fantasy",
              color: "#fff",
              paddingLeft: "2%"
            }}>Comic Posted</Text>
          </View>
          <View style={{ flex: 1, marginBottom: 5, paddingLeft: "2%" }}>
            <SwipeListView
              data={ListPost}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              renderHiddenItem={renderSwip}
              leftOpenValue={100}
              stopLeftSwipe={100}
              disableLeftSwipe={true}
              refreshing={false}
              onRefresh={onRefresh}
            />
          </View>
        </View>
      </View>
    </ImageBackground>

  )
}
export default UserInfo
