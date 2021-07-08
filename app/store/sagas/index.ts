/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import loadComicSaga from './ComicSaga/listComicSaga'
import infoComicSaga from './ComicSaga/infoComicSaga'
import searchComicSaga from './ComicSaga/searchComicSage'
import listBookmarkSaga from './ComicSaga/listBookmarkSaga'
import createUserSaga  from './createUser'
import updateListPost  from  './updateListpost'

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.COMIC_LIST_REQUEST, loadComicSaga)])
  yield all([takeEvery(types.COMIC_INFO_REQUEST, infoComicSaga)])
  yield all([takeLatest(types.COMIC_SEARCH_REQUEST, searchComicSaga)])
  yield all([takeEvery(types.BOOKMARK_LIST_REQUEST, listBookmarkSaga)])
  yield all([takeEvery(types.CREATE_USER, createUserSaga)])
  yield all([takeEvery(types.LIST_POST_REQUEST,updateListPost)])
}
