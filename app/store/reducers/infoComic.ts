/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IComicInfoState } from 'app/models/reducers/comicInfo';
import {
  IComicInfoRequestPayload,
  IComicInfoResponsePayload,
  IChapterRequestPayload,
  IChapterResponsePayload
} from 'app/models/actions/comicInfo';
const initialState: IComicInfoState = {
  idComic:"",
  comicInfo: null,
  isBookmark:false,
  userLike: false,
  userDislike: false,
  loadError:false, 
  loadSuccess:false,
  loadChapterSuccess:false,
  chapterList:[]
};

export const infoComicReducer = createReducer(initialState, {
  [types.COMIC_INFO_REQUEST](state: IComicInfoState, action: IComicInfoRequestPayload) {
    return {
      ...state,
      loadSuccess:false,
      idComic:action.id
      
    };
  },
  [types.COMIC_INFO_LOADING_ENDED](state: IComicInfoState) {
    return { ...state };
  },
  [types.COMIC_INFO_RESPONSE](state: IComicInfoState, action: IComicInfoResponsePayload) {
    return {
      ...state,
      comicInfo: action.response,
      loadSuccess: true
    };
  },
  
  [types.COMIC_LOAD_FAILED](state: IComicInfoState) {
    return {
      ...state,
      loadSuccess: false,
    };
  },
// Chapter
///
///
[types.CHAPTER_LIST_REQUEST](state: IComicInfoState, action: IChapterRequestPayload) {
  return {
    ...state,
    loadChapterSuccess:false
  };
},
[types.CHAPTER_LIST_RESPONSE](state: IComicInfoState, action: IChapterResponsePayload) {
    return {
      ...state,
      chapterList: action.response,
      loadChapterSuccess: true
    };
  },
  [types.CHAPTER_LIST_LOADING_ENDED](state: IComicInfoState) {
    return { ...state };
  },
  [types.CHAPTER_LIST_LOAD_FAILED](state: IComicInfoState) {
    return {
      ...state,
    loadSuccess: false,
    chapterList:[]
    };
  },
});
