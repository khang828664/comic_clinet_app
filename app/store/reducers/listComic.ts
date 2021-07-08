/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IComicListState } from 'app/models/reducers/comicLoad';
import {
  IComicRequestPayload,
  IComicListResponsePayload,
} from 'app/models/actions/comicLoad';
const initialState: IComicListState = {
  start: 0,
  end: 0,
  loadError:false,
  comicList: [],
  loadSuccess:false
};

export const listComicReducer = createReducer(initialState, {
  [types.COMIC_LIST_REQUEST](state: IComicListState, action: IComicRequestPayload) {
    return {
      ...state,
      start: action.start,
      end: action.end,
      loadSuccess:false,
    };
  },
  [types.COMIC_LOADING_ENDED](state: IComicListState) {
    return { ...state };
  },
  [types.COMIC_LIST_RESPONSE](state: IComicListState, action: IComicListResponsePayload) {
    return {
      ...state,
      comicList : [...state.comicList, ...action.response],
      loadSuccess: true
    };
  },
  [types.COMIC_LOAD_FAILED](state: IComicListState) {
    return {
      ...state,
      isLoadError: true,
      loadSuccess: false,
    };
  },
  [types.COMIC_CLEAR_LIST](state: IComicListState) {
    return {
      ...state,
      comicList:[]
    };
  },
});
