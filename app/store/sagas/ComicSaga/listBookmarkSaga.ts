/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, putResolve } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import *as ComicAction from 'app/store/actions/ComicActions';
import { GetBookmark, GetListComic } from 'app/services/Comic'
// import  { ILoginRequest, ILoginResponse } from 'app/models/api/login'
// Our worker Saga that logins the user
interface serverResponse {
  data: {
    result: boolean,
    data: any
  }
}
export default function* ListBookmarkAsync({ idUser }: ReturnType<typeof ComicAction.bookmarkListAction.requestListBookmark>) {
  yield put(ComicAction.bookmarkListAction.enableLoader());
  const response: serverResponse = yield call(GetBookmark, idUser)
  if (response.data.result) {
    yield putResolve(ComicAction.bookmarkListAction.onComicLoadResponse(response.data.data));
    yield put(ComicAction.bookmarkListAction.disableLoader());

  } else {
    Alert.alert(
      "Error",
      "load Bookmark Failed"
    )
    yield put(ComicAction.bookmarkListAction.loadFailed());
    yield put(ComicAction.bookmarkListAction.disableLoader());
  }
}
