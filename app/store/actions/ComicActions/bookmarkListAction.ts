/*
 * Reducer actions related with login
 */
import * as types from '../types';
import { IBookmarkListResponse } from 'app/models/api/bookmarkList';

export function requestListBookmark( idUser :string) {
  return {
    type: types.BOOKMARK_LIST_REQUEST,
    idUser
  };
}

export function loadFailed() {
  return {
    type: types.BOOKMARK_LOAD_FAILED,
  };
}

export function onComicLoadResponse(response: IBookmarkListResponse) {
  return {
    type: types.BOOKMARK_LIST_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: 
    types.BOOKMARK_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.BOOKMARK_DISABLE_LOADER,
  };
}
export function clearList() { 
  return{
    type: types.BOOKMARK_CLEAR_LIST,
  }
}

