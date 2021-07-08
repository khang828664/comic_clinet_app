import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { hardData } from '../hardData'
import Icon from 'react-native-vector-icons/FontAwesome5'
import NavigationService from 'app/navigation/NavigationService'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { IComicInfoState } from 'app/models/reducers/comicInfo'
import { ILoading } from 'app/models/reducers/loading'
import { useSelector } from "react-redux"
import ApiConfig from 'app/config/api-config'

interface itemType {
  item: {
    ChapterIndex: number,
    DateCreate: string,
    Description: string
  }
  index: number
}
//

interface stateType {
  infoComicReducer: IComicInfoState
  loadingReducer: ILoading
}
export const ListChapter = ({ data }: any) => {
  const listChapter = useSelector((state: stateType) => state.infoComicReducer.chapterList)
  console.log(listChapter)
  const renderItem = ({ index, item }: any) => {
    return (
      <TouchableOpacity
        key={index.toString()}
        onPress={() => {
          NavigationService.navigate("ComicRead", { Image: item.Image })
        }}>
        <View style={{
          flex: 1,
          borderWidth: 2,
          paddingVertical: 10,
          backgroundColor: "#030303",
          flexDirection: "row",
          height: 100
        }}>

          <Image source={{
            uri: ApiConfig.BASE_URL + ApiConfig.Image.ChapterImage + item.Image[0],
          }}
            style={{ width: "25%", height: "100%", borderColor: "#000", borderWidth: 1 }}
          />
          <View style={{ width: "65%", alignContent: "flex-end" }}>
            <View style={{ flexDirection: "row", marginLeft: 10, justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#fff" }}>
                  {index + 1} :
                </Text>
                <Text style={{ color: "#fff" }}>
                  #{item.ChapterIndex}
                </Text>
              </View>
              <Text style={{ color: "#fff", paddingEnd: '2%', opacity: 0.5 }}>
                {(new Date(item.DateUpdate)).toUTCString()}
              </Text>
            </View>
            <Text style={{ color: "#fff", marginLeft: 10 }}>
              {item.Description}
            </Text>
          </View>
          <Icon name='comment-alt'
            color={"red"}
            style={{ paddingEnd: '2%', alignSelf: "flex-end" }}
            size={30}
            onPress={() => console.log("comment")}
            solid={true}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      {listChapter.map((item: any, index: number) =>
        renderItem({ item, index })
      )}
    </View>
  )
}
