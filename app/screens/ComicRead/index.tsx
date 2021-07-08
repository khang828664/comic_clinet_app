import React, { useEffect, useState, useMemo } from "react";
import { View, Text, FlatList, Image, Dimensions, Animated, TouchableHighlight, StatusBar, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as loginActions from 'app/store/actions/loginActions';
import { styles } from './styles';
import { hardData } from './hardData'
import FastImage from 'react-native-fast-image'
import NavigationService from "app/navigation/NavigationService";
import ApiConfig from "app/config/api-config";
import { useSelector } from 'react-redux'
import { IComicInfoState } from "app/models/reducers/comicInfo";
import { ILoading } from "app/models/reducers/loading";
const data = require("app/assets/Demo_1.jpg")
interface typeRoute {
  route: {
    params: {
      Name: string,
      _id: string,
      Image: string[],
    }
  }
}
interface stateType {
  infoComicReducer: IComicInfoState
  loadingReducer: ILoading
}
const ComicRead = ({ route }: typeRoute) => {
  const cover = useSelector((state: stateType) => state.infoComicReducer.comicInfo.Cover)
  const [ImageData, set_id] = useState(route.params.Image)
  const [ImageSize, setImageSize] = useState({ h: 0, w: 0 })
  const [Onload, setOnload] = useState(false)
  const [onloadImage, setOnloadImage] = useState(false)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [rate, setRate] = useState(0)
  const [isHorizontal, setHorizontal] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [onScroll, setOnScroll] = useState(false)
  const [window, setWindow] = useState(Dimensions.get("window"))
  Dimensions.addEventListener("change", () => setWindow(Dimensions.get("window")))
  useEffect(() => {
    Image.getSize(ApiConfig.BASE_URL + ApiConfig.Image.ChapterImage + ImageData[0],
      (w, h) => {
        setRate(h / w)
        setImageSize({ h, w })
      })
  }, [])
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const animatedShow = new Animated.Value(0)

  //Khi tải hình nhỏ, ta sẽ đặt hình nhỏ thành 1
  //Khi tải hình ảnh đầy đủ, sẽ đặt imageAnimated thành 1
  //2 function phía dưới sẽ được gọi trong onLoad()
  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    if (isTouch) {
      onShow()
      console.log(isTouch)
    }
  }, [isTouch])
  useEffect(() => {
    if (!isTouch) {
      onHide()
      console.log(isTouch)
    }
  }, [isTouch])
  const yValHead = animatedShow.interpolate({
    inputRange: [0, 1],
    outputRange: (isTouch) ? [0, 50] : [50, 0]
  });
  const yValFooter = animatedShow.interpolate({
    inputRange: [0, 1],
    outputRange: (!isTouch) ? [50, 0] : [0, 50],
  });
  const onImageLoad = (item: any) => {
    if (!onScroll) {
      Animated.timing(imageAnimated, {
        toValue: 4,
        useNativeDriver: true,
      }).start();
    }
  };
  const animStyleHeader = {
    transform: [
      {
        translateY: yValHead,
      },
    ],
  };
  const onShow = () => {
    Animated.timing(animatedShow, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const onHide = () => {
    Animated.timing(animatedShow, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const renderImage = ({ item, index }: any) => {
    return (
      (rate ? (
        <View style={{
          backgroundColor: "black",
          borderColor: "black",
          borderWidth: 2,
          width: (window.width > window.height) ? window.height * rate : window.width,
          height: (window.width > window.height) ? window.width : window.height / rate,
          marginVertical: 2,
          flex: 1,
          alignSelf: "center"
        }}>
          {/* <Animated.Image
            source={{uri:ApiConfig.BASE_URL+ApiConfig.Image.Cover+cover}}
            style={{
              width: "100%",
              height: "100%",
              resizeMode:"contain"

            }}
            onLoad={handleThumbnailLoad}
          /> */}
          <View
          style={{justifyContent:"center", flex:1}}
          >
            <ActivityIndicator
              animating={onloadImage}
              size={"large"}
              color="red"
            />
          </View>

          <FastImage source={{
            uri: ApiConfig.BASE_URL + ApiConfig.Image.ChapterImage + item,
            priority:FastImage.priority.high
          }
          }
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              
            }}
            resizeMode={FastImage.resizeMode.contain}
            
            onLoadStart={() => {
              setOnloadImage(true)
              onImageLoad
            }}
            onLoadEnd={() => setOnloadImage(false)}
          />
        </View>
      ) : (<></>))
    )
  }
  return (
    <View style={[styles.container, { marginTop: 20 }]}>
      <FlatList
        onTouchEndCapture={() => {
          setIsTouch(!isTouch)
        }}
        data={ImageData}
        onScroll={() => setOnScroll(true)}
        onScrollBeginDrag={() => { setOnScroll(false) }}
        renderItem={renderImage}
        maxToRenderPerBatch ={20}
        keyExtractor={(item)=>item}
      // horizontal={true}
      // inverted ={true}
      ></FlatList>
      <Animated.View
        style={[{
          height: 50,
          width: "100%",
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          position: "absolute",
          top: -70,
          justifyContent: "center",
          paddingHorizontal: 20,
        },
          animStyleHeader]}
      >{Onload}
        <Icon name="chevron-left" size={30} color={"rgba(255, 255, 255, 0.8)"}
          onPress={() => {
            NavigationService.goBack()
          }}
        />
      </Animated.View>
      {/* <Animated.View
        style={[{
          height: 50,
          width: width,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: "absolute",
          bottom: 0
        },
          animStyleFooter]}
      >{Onload}<Text>Footer</Text></Animated.View> */}
    </View>

  );
};
export default ComicRead;
