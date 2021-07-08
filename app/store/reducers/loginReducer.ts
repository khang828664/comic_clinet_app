/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ILoginState } from 'app/models/reducers/login';
import {
  ILoginRequestState,
  ILoginResponseState,
} from 'app/models/actions/login';
const initialState: ILoginState = {
  isLoggedIn: false,
  username: '',
  password: '',
  userInfo: null,
  listPost: [],
  userCover: '',
  historyComic: [],
  loadSuccess: false
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: ILoginRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: ILoginState) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state: ILoginState, action: ILoginResponseState) {
    return {
      ...state,
      userInfo: action.response.userInfo,
      // listPost: action.response.listPost,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
      username: "",
      password: "",
      historyComic: [],
      userInfo: null,
      listPost:[]
    };
  },
  [types.SET_COVER](state: ILoginState, action: any) {
    return {
      ...state,
      userCover: action.userCover
    };
  },
  /// history add history comic
  [types.HISTORY_START_LOAD](state: ILoginState, action: any) {
    return {
      ...state,
      loadSuccess: false
    };
  },
  [types.HISTORY_COMIC](state: ILoginState, action: any) {
    // Update History comic
    let tempData = state.historyComic
    console.log(action)
    let isHistory = tempData?.findIndex(item=>item._id===action.comicHistory._id)
    if ((isHistory) && (isHistory < 0)) {
      tempData?.push(action.comicHistory)
    } else {
      tempData
    }
    return {
      ...state,
      historyComic: tempData
    };
  },
  [types.HISTORY_END_LOAD](state: ILoginState, action: any) {
    return {
      ...state,
      loadSuccess: true
    };
  },
  [types.USER_BOOKMARK](state: ILoginState, action: ILoginRequestState) {
    let tempUserInfo: any = null
    if (action.bookmark.status) {
      tempUserInfo = state.userInfo
      tempUserInfo.Bookmark.push(action.bookmark._idComic)
    } else {
      tempUserInfo = state.userInfo
      let position = tempUserInfo.Bookmark.indexOf(action.bookmark._idComic)
      tempUserInfo.Bookmark.splice(position, 1);
    }
    return {
      ...state,
      userInfo: tempUserInfo
    };
  },
  [types.CREATE_USER](state: ILoginState, action: any) {
    return {
      ...state,
    };
  },
  [types.CREATE_USER](state: ILoginState, action: any) {
    return {
      ...state,
    };
  },
  [types.USER_RESPONSE](state: ILoginState, action: any) {
    return {
      ...state,
      isLoggedIn: true,
      userInfo : action.userDataResponse
    };
  },
  [types.LIST_POST](state:ILoginState, action:any){
    return {
      ...state,
      listPost : action.response 
    }
  }
});
