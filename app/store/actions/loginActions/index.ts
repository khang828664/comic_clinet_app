/*
 * Reducer actions related with login
 */
import * as types from '../types';
import { ILoginResponse } from 'app/models/api/login';

interface bookmark {
  _idComic: string,
  status: boolean
}
export function requestLogin(username: string, password: string) {
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response: ILoginResponse) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
export function updateBookmark(bookmark: bookmark) {
  return {
    type: types.USER_BOOKMARK,
    bookmark
  }
}
export function setCover(userCover: string) {
  return {
    type: types.SET_COVER,
    userCover
  }
}

// set history
export function loadStartHistory() {
  return {
    type: types.HISTORY_START_LOAD
  }
}
export function setHistory(comicHistory: any) {
  return {
    type: types.HISTORY_COMIC,
    comicHistory
  }
}
export function loadEndHistory() {
  return {
    type: types.HISTORY_START_LOAD
  }
}

export function createAccount(userData: any) {
  return {
    type: types.CREATE_USER,
    userData
  }
}
export function responseUser(userDataResponse: any) {
  return {
    type: types.USER_RESPONSE,
    userDataResponse
  }
}
export function requestUpdateListPost(_idUser: string) {
  return {
    type: types.LIST_POST_REQUEST,
    _idUser
  }
}
export function responseListComic(response: any) {
  return {
    type: types.LIST_POST,
    response
  }
}
// not
export function requestDeleteComic(_idComic :string){
  return {
    type : types.DELETE_LIST_POST,
    _idComic
  }
}
