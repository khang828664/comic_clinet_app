import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export function loginUser(username: string, password: string) {
  return apiClient.post(ApiConfig.USER.LOGIN, { username: username, password: password })
}
export function getListPost(idUser: string) {
  return apiClient.post(ApiConfig.USER.LIST_POST, { _idUser: idUser })
}
export function createAccount(userData: any) {
  let result = null
  apiClient.post(ApiConfig.USER.CREATE, userData).then(response => { result = response }).catch(e => {
    console.error(e.toString())
  })
  return result
}


