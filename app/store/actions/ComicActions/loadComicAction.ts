/*
 * Reducer actions related with login
 */
import * as types from '../types';
import { IComicListResponse } from 'app/models/api/comicList';

export function requestLoadComic(start: number, end: number) {
  return {
    type: types.COMIC_LIST_REQUEST,
    start,
    end,
  };
}

export function loadFailed() {
  return {
    type: types.COMIC_LOAD_FAILED,
  };
}

export function onComicLoadResponse(response: IComicListResponse) {
  return {
    type: types.COMIC_LIST_RESPONSE,
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
    type: types.COMIC_CLEAR_LIST,
  }
}
