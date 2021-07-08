import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import axios from 'axios'

export  function loginUser(username: string, password: string) {
  return apiClient.post(ApiConfig.USER.LOGIN, { username: username, password: password })
}
export function getListPost (idUser:string) {
  return apiClient.post(ApiConfig.USER.LISTPOST,{_idUser:idUser})
}
export function createAccount (userData:any) {
  return apiClient.post(ApiConfig.USER.CREATE,userData)
}
