import ApiConfig from "app/config/api-config";
import axios from "axios";
import { Alert } from 'react-native'
import React from 'react'
export const deleteComic = async (_idComic: string) => {
  let a = await axios.post(ApiConfig.BASE_URL + ApiConfig.COMIC.DELETE,{
    _id:_idComic
  })
  return a.data
}
