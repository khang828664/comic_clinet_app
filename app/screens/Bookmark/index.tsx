import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { hardData } from './hardData'
import { IBookmarkListState } from 'app/models/reducers/bookmarkList'
import { ILoginState } from 'app/models/reducers/login'
import *as BookmarkAction from 'app/store/actions/ComicActions'
import { ListBookmark, ListBookmarkH } from './component'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppStyles from 'app/config/styles'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

interface stateType {
  listBookmarkReducer: IBookmarkListState
  loginReducer: ILoginState
}
const window = Dimensions.get("window")
const Bookmark = () => {
  const navigation = useNavigation()
  navigation.addListener("focus", () => {
    firstLoad()
  })
  useEffect(() => {
    return () => {
      navigation.removeListener("focus", () => { console.log("remove") })
    }
  }, [])
  const ListBookmarkData = useSelector((state: stateType) => state.listBookmarkReducer.bookmarkList)
  const loadSuccess = useSelector((state: stateType) => state.listBookmarkReducer.loadSuccess)
  const _idUser = useSelector((state: stateType) => state.loginReducer.userInfo?._id)
  const [isHorizontal, setHorizontal] = useState(false)
  const [sortUp, setSortUp] = useState(false)
  const [isHistory, setIsHistory] = useState(false)
  const [isBookmark, setIsBookmark] = useState(true)
  const [data, setData] = useState<any>([])
  const dispatch = useDispatch()
  const Setting: React.FC = ({ ...props }: any) => (<View style={{
    backgroundColor: '#cf0000',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "2.5%",
    alignItems: "center"
  }}>
    <Icon name="sliders-h" size={AppStyles.fontSize.MEDIUM} />
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    </View>
    {
      (sortUp) ? (<><Icon name="sort-numeric-up" size={AppStyles.fontSize.MEDIUM}
        onPress={() => {
          setSortUp(!sortUp)
          console.log("shortUp")
          let a = ListBookmarkData.sort((a, b) => (ListBookmarkData.indexOf(b) - ListBookmarkData.indexOf(a)))
          dispatch(BookmarkAction.bookmarkListAction.onComicLoadResponse(a))

        }}
      /></>)
        : (<><Icon name="sort-numeric-down" size={AppStyles.fontSize.MEDIUM}
          onPress={() => {
            setSortUp(!sortUp)
            let a = ListBookmarkData.sort((a, b) => (ListBookmarkData.indexOf(b) - ListBookmarkData.indexOf(a)))
            dispatch(BookmarkAction.bookmarkListAction.onComicLoadResponse(a))

          }}
        /></>)
    }
  </View>)

  Dimensions.addEventListener("change", () => {
    let windowCurrent = Dimensions.get("window")
    if (windowCurrent.height < windowCurrent.width) {
      setHorizontal(true)
    } else {
      setHorizontal(false)
    }
  })
  const firstLoad = async () => {
    if (_idUser) {
      dispatch(BookmarkAction.bookmarkListAction.requestListBookmark(_idUser))
      setData(ListBookmarkData)
    }
    if (window.height < window.width) {
      setHorizontal(true)
    }
  }
  const onRefresh = () => {
    if (_idUser) {
      dispatch(BookmarkAction.bookmarkListAction.requestListBookmark(_idUser))
      setData(ListBookmarkData)
    }
  }
  return (
    <View style={styles.container}>
      {!loadSuccess ? (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          animating={!loadSuccess}
          color="red"
          size="large"
        />
      </View>) : (<>

        {isHorizontal ? (

          <View><ListBookmarkH
            data={ListBookmarkData}
          />
            <Setting />
          </View>
        ) : (
          <>
            <ListBookmark
              data={ListBookmarkData}
              onRefresh={onRefresh}
            />
            <Setting

            />
          </>
        )}
      </>)}
    </View>
  )
}

export default Bookmark
