/*
 * Reducer actions related with login
 */
import * as types from '../types';
import { IComicInfoResponse, IChapterResponse } from 'app/models/api/comicInfo';
export function requestInfoComic(id:string) {
  return {
    type: types.COMIC_INFO_REQUEST,
    id
  };
}
export function requestChapterList(id:string) {
  return {
    type: types.CHAPTER_LIST_REQUEST,
    id
  };
}
export function loadFailed() {
  return {
    type: types.COMIC_INFO_LOAD_FAILED,
  };
}

export function loadChapterFailed() {
  return {
    type: types.CHAPTER_LIST_LOAD_FAILED,
  };
}
export function onComicInfoResponse(response: IComicInfoResponse) {
  return {
    type: types.COMIC_INFO_RESPONSE,
    response,
  };
}
export function onChapterListResponse (response: IChapterResponse){
  return {
    type:types.CHAPTER_LIST_RESPONSE,
    response
  }
}

export function enableLoader() {
  return {
    type: types.COMIC_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMIC_DISABLE_LOADER,
  };
}
