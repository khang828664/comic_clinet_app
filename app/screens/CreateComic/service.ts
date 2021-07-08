import ApiConfig from "app/config/api-config";
import axios from "axios";
import { Alert } from 'react-native'
import React from 'react'
export const createComic = async (comicInfo: any) => {
  console.log(comicInfo)
  let form = new FormData()
  form.append("_idUser", comicInfo._idUser)
  form.append("Name", comicInfo.name)
  comicInfo.author.map((item: any) => {
    form.append("Author", item)
  })
  comicInfo.tag.map((item: any) => {
    form.append("Tag", item)
  })
  form.append("Files", { uri: comicInfo.image.uri, name: comicInfo.image.fileName, type: 'image/jpeg' })
  form.append("Description", comicInfo.des)
  let a = await axios.post(ApiConfig.BASE_URL + ApiConfig.COMIC.CREATE, form)
  return a.data
}
