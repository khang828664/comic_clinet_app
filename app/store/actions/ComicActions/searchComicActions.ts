/*
 * Reducer actions related with login
 */
import * as types from '../types';
import { IComicListResponse } from 'app/models/api/comicSearch';

export function requestLoadComic(valueSearch: string) {
  return {
    type: types.COMIC_SEARCH_REQUEST,
    valueSearch
  };
}

export function loadFailed() {
  return {
    type: types.COMIC_SEARCH_FAILED,
  };
}

export function onComicLoadResponse(response: IComicListResponse) {
  return {
    type: types.COMIC_SEARCH_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: 
    types.COMIC_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMIC_DISABLE_LOADER,
  };
}
export function clearList() { 
  return{
    type: types.COMIC_SEARCH_CLEAR_LIST,
  }
}
