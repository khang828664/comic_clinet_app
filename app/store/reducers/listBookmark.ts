/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IBookmarkListState } from 'app/models/reducers/bookmarkList';
import {
  IBookmarkRequestPayload,
  IBookmarkListResponsePayload,
} from 'app/models/actions/BookmarkList';
const initialState:IBookmarkListState = {
  loadError:false,
  bookmarkList:[],
  loadSuccess:false
};

export const listBookmarkReducer = createReducer(initialState, {
  [types.BOOKMARK_LIST_REQUEST](state: IBookmarkListState, action: IBookmarkRequestPayload) {
    return {
      ...state,
      loadSuccess:false,
    };
  },
  [types.BOOKMARK_LOADING_ENDED](state: IBookmarkListState) {
    return { ...state };
  },
  [types.BOOKMARK_LIST_RESPONSE](state: IBookmarkListState, action: IBookmarkListResponsePayload) {
    return {
      ...state,
      bookmarkList : action.response,
      loadSuccess: true
    };
  },
  [types.BOOKMARK_LOAD_FAILED](state: IBookmarkListState) {
    return {
      ...state,
      isLoadError: true,
      loadSuccess: false,
    };
  },
  [types.BOOKMARK_CLEAR_LIST](state: IBookmarkListState) {
    return {
      ...state,
      bookmarkList:[]
    };
  },
});
