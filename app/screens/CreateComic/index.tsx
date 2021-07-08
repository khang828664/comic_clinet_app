import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Button, Modal, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './styles';
import AppStyles from 'app/config/styles';
import NavigationService from 'app/navigation/NavigationService';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createComic } from './service'

function CreateComic({ route }: any) {
  const [_idUser, setIdUser] = useState(route.params)
  const [image, setImage] = useState({ uri: "", fileName: "" })
  const [imageFile, setImageFile] = useState([])
  const [name, setName] = useState("")
  const [author, setAuthor] = useState<string[]>([])
  const [tag, setTag] = useState<string[]>([])
  const [des, setDes] = useState("")
  const [isInputAuthor, setIsInputAuthor] = useState(false)
  const [isInputTag, setIsInputTag] = useState(false)

  // const dispatch = useDispatch()
  //const [_idUser, set_idUser] = useState(route._idUser)
  const [openModel, setOpenModel] = useState(false)
  const onSubmit = async () => {
    let userInfo = {
      _idUser: _idUser,
      name: name,
      author: author,
      tag: tag,
      des: des,
      image: image
    }
    try {
      let result = await createComic(userInfo)
      if (!result.result) {
        Alert.alert("Error", "Create Again")
      } else {
        Alert.alert("Create", "Success")
        NavigationService.goBack()
      }
    } catch (err) {
      Alert.alert("Err", err.toString())
    }
  }
  const UploadImage = () => {
    launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 1,
    }, ({ assets }) => {
      setImage({
        uri: (assets[0].uri ? assets[0].uri : ""),
        fileName: (assets[0].fileName ? assets[0].fileName : "")
      })
    })
  }
  const authorSet = (param: string) => {
    let temp = author
    if (param.length > 0) {
      temp.push(param)
      setAuthor(temp)
      console.log(author)
    }
  }
  const tagSet = (param: string) => {
    let temp = tag
    if (param.length > 0) {
      temp.push(param)
      setTag(temp)
      console.log(tag)
    }
  }
  const ShowAuthor = () =>
    <TouchableOpacity
      onPress={() => setIsInputAuthor(true)}
      style={{
        flex: 1,
        height: 50,
        borderBottomColor: AppStyles.color.COLOR_RED_PRIMARY,
        borderWidth: 2
      }}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {author.map((item, index) => {
          return (
            <View style={{ flexDirection: "row", paddingHorizontal: 10 }}
              key={index.toString()}
            >
              <Text style={{ color: "red" }}>{item}</Text>
              <Icon name="times" color={"red"}
                onPress={() => {
                  setAuthor(deleteItem(item, author))

                }}
              ></Icon>
            </View>
          )
        })}
      </View>
    </TouchableOpacity>
  const deleteItem = (param: string, array: string[]) => {
    let tempData = array.filter((item: any) => (item !== param))
    return tempData
  }
  const ShowTag = () =>
    <TouchableOpacity
      onPress={() => setIsInputTag(true)}
      style={{
        flex: 1,
        height: 50,
        borderBottomColor: AppStyles.color.COLOR_RED_PRIMARY,
        borderWidth: 2
      }}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {tag.map((item, index) =>
          <View
            key={index.toString()}
            style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            <Text style={{ color: "red" }}>{item}</Text>
            <Icon name="times" color={"red"}
              onPress={() => {
                setTag(deleteItem(item, tag))
              }}
            ></Icon>
          </View>
        )}
      </View>
    </TouchableOpacity>
  const ImageModel = () => <Modal
    animationType={"slide"}
    visible={openModel}
    transparent={true}
    onRequestClose={() => setOpenModel(false)}
  >
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.6)" }}>
      <View style={{ alignItems: "flex-end", padding: "5%", flex: 1 }}>
        <Icon name="times" size={AppStyles.fontSize.MEDIUM}
          color={AppStyles.color.COLOR_RED_PRIMARY}
          onPress={() => setOpenModel(false)}
        />
      </View>
      <Image
        source={{ uri: image.uri }}
        style={{ height: "90%", resizeMode: "contain" }}
      ></Image>
    </View>
  </Modal>
  return (
    <View style={styles.mainContainer}>
      <ImageModel></ImageModel>
      <ScrollView style={styles.formContainer}>
        <Text style={styles.textStyle}>
          Name Comic
        </Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <Text style={styles.textStyle}>
          Author
        </Text>
        {(isInputAuthor) ? (
          <TextInput style={styles.inputStyle}
            autoFocus={true}
            onEndEditing={(event) => {
              let text = event.nativeEvent.text
              authorSet(text)
              setIsInputAuthor(false)
            }}
          ></TextInput>
        ) : (<><ShowAuthor /></>)}
        <Text style={styles.textStyle}>
          Tag
        </Text>
        {(isInputTag) ? (
          <TextInput style={styles.inputStyle}
            autoFocus={true}
            onEndEditing={(event) => {
              let text = event.nativeEvent.text
              tagSet(text)
              setIsInputTag(false)
            }}
          ></TextInput>
        ) : (<><ShowTag /></>)}
        <Text style={styles.textStyle}>
          Description
        </Text>
        <TextInput style={styles.inputStyle}
          multiline={true}
          onChangeText={(text) => setDes(text)}
        ></TextInput>
        <Text style={styles.textStyle}>
          Cover
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Upload"
            color={AppStyles.color.COLOR_RED_PRIMARY}
            onPress={UploadImage}
          >
          </Button>
        </View>
        <>{image.uri ? (
          <TouchableOpacity
            onPress={() => setOpenModel(true)}
          >
            <Image
              source={{ uri: image.uri }}
              style={{ resizeMode: "stretch", height: 100, width: 100 }}
            ></Image>
          </TouchableOpacity>
        ) : (
          <></>
        )}</>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={onSubmit}
        ><Text style={styles.submitText}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default CreateComic
