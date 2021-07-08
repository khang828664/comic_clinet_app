/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IComicSearchState } from 'app/models/reducers/comicSearch';
import {
  IComicSearchRequestPayload,
  IComicListResponsePayload
} from 'app/models/actions/comicSearch';
const initialState: IComicSearchState = {
  loadError:false,
  comicSearchName:[],
  comicSearchAuthor:[],
  loadSuccess:false
};

export const searchComicReducer = createReducer(initialState, {
  [types.COMIC_SEARCH_REQUEST](state: IComicSearchState, action: IComicSearchRequestPayload) {
    return {
      ...state,
      loadSuccess:false,
    };
  },
  [types.COMIC_SEARCH_LOADING_ENDED](state: IComicSearchState) {
    return { ...state };
  },
  [types.COMIC_SEARCH_RESPONSE](state: IComicSearchState, action: IComicListResponsePayload) {
    return {
      ...state,
      comicSearchName : action.response.comicListName,
      comicSearchAuthor: action.response.comicListAuthor,
      loadSuccess: true
    };
  },
  [types.COMIC_LOAD_FAILED](state: IComicSearchState) {
    return {
      ...state,
      isLoadError: true,
      loadSuccess: false,
    };
  },
  [types.COMIC_CLEAR_LIST](state: IComicSearchState) {
    return {
      ...state,
      comicSearchName:[],
      comicSearchAuthor:[]
    };
  },
});
