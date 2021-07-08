import ApiConfig from "app/config/api-config";
import axios from "axios";
import { Alert } from 'react-native'
import React from 'react'
export const updateComic = async (comicInfo: any) => {
  console.log(comicInfo)
  let updateInfo = [
    {
      _id: comicInfo._idComic
    },
    {
      Name: comicInfo.name,
      Tag: comicInfo.tag,
      Author: comicInfo.author,
      Description: comicInfo.des
    }
  ]
  let form = new FormData()
  form.append("typeUpload", 0)
  form.append("Files", { uri: comicInfo.image.uri, name: comicInfo.image.fileName, type: 'image/jpeg' })
  form.append("_id", comicInfo._idComic)
  // let form = new FormData()
  // form.append("_idUser", comicInfo._idUser)
  // form.append("Name", comicInfo.name)
  // comicInfo.author.map((item: any) => {
  //   form.append("Author", item)
  // })
  // comicInfo.tag.map((item: any) => {
  //   form.append("Tag", item)
  // })
  // form.append("Files", { uri: comicInfo.image.uri, name: comicInfo.image.fileName, type: 'image/jpeg' })
  // form.append("Description", comicInfo.des)
  if (comicInfo.image.uri.length > 0) {
    let uploadImage = await axios.post(ApiConfig.BASE_URL + ApiConfig.COMIC.UPLOADCOVER, form)
  }

  let a = await axios.post(ApiConfig.BASE_URL + ApiConfig.COMIC.UPDATE, updateInfo)
  return a.data
}
