import NavigationService, { navigationRef } from 'app/navigation/NavigationService'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import appStyle from 'app/config/styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListChapter, Comment, ComicRelate } from './subScreen'
import { color } from 'react-native-reanimated'
import AppStyles from 'app/config/styles'


export const Name = ({ name, ...props }: any) => {
  return (
    <>
      <Text
        style={{
          fontFamily: "fantasy",
          fontSize: appStyle.fontSize.MEDIUM,
          color: AppStyles.color.COLOR_WHITE
        }}
        numberOfLines={props.numberOfLines}
      >{name}</Text>
    </>
  )
}
export const Tag = ({ tags, style }: any) => {
  const changeToSearchScreen = (param: string) => {
    NavigationService.navigate("Search", param)
  }
  return (
    <View style={[{ flexDirection: "row", alignItems: "baseline", flexWrap: "wrap" },style]}>
      <Text style={{ color: "white" }}>Tag:</Text>
      {(tags) ? (tags.map((item: string, index: number) => {
        return (
          <TouchableOpacity style={{ marginHorizontal: 5 }}
            onPress={() => changeToSearchScreen(item)}
            key={index.toString()}
          >
            <Text style={{ color: "#e31c25" }}>{`${item}`}</Text>
          </TouchableOpacity>
        )
      })) : (<><Text>#UnKnow</Text></>)}
    </View>);
}
export const Bookmark = ({ isCheck, onPress, style }: any) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "#fff", textAlign: "center" }}>Bookmark</Text>
      <Icon name="bookmark" color={isCheck ? "#fff" : "#e31c25"} onPress={() => onPress()} size={40} />
    </View>
  )
}
export const Like = ({ isCheck, onPress, style, likenNumber }: any) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "#fff" }}>{likenNumber}</Text>
      <Icon name="thumbs-up" color={isCheck ? "#fff" : "#e31c25"} onPress={() => onPress()} size={40} />
    </View>
  )
}
export const Dislike = ({ isCheck, onPress, style, dislikeNumber }: any) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "#fff" }}>{dislikeNumber}</Text>
      <Icon name="thumbs-down" color={isCheck ? "#fff" : "#e31c25"} onPress={() => onPress()} size={40} />
    </View>
  )
}
export const Author = ({ author, style }: any) => {
  const changeToSearchScreen = (param: string) => {
    NavigationService.navigate("Search", param)
  }
  return (
    <View style={[{ flexDirection: "row", alignItems: "baseline", flexWrap: "wrap" }, style]}>
      <Text style={{ color: "white" }}>Author:</Text>
      {(author) ? (author.map((item: string, index: number) => {
        return (
          <TouchableOpacity style={{ marginHorizontal: 5 }}
            onPress={() => changeToSearchScreen(item)}
            key={index.toString()}
          >
            <Text style={{ color: "#e31c25" }}>{`${item}`}</Text>
          </TouchableOpacity>
        )
      })) : (<><Text>#UnKnow</Text></>)}
    </View>);

}
export const TabChapterNavigator = () => {
  const TabNavigator = createMaterialTopTabNavigator()
  return (
    <TabNavigator.Navigator
      initialRouteName={"ListChapter"}
      tabBarOptions={{
        activeTintColor: "#a40000",
        inactiveTintColor: "#fff",
        labelStyle: {
          fontFamily: "fantasy",
          alignSelf: "flex-start"
        },
        indicatorStyle: {
          flex: 1,
          backgroundColor: '#a40000',
        },
        style: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <TabNavigator.Screen
        name="ListChapter"
        component={ListChapter}
        options={{
          tabBarLabel: "List chapter",

        }}
      ></TabNavigator.Screen>
      <TabNavigator.Screen
        name="Comment"
        component={Comment}
        options={{
          tabBarLabel: "Comment"
        }}
      ></TabNavigator.Screen>
      <TabNavigator.Screen
        name="ComicRelate"
        component={ComicRelate}
        options={{
          tabBarLabel: "Relate"
        }}
      ></TabNavigator.Screen>
    </TabNavigator.Navigator>
  );

}
