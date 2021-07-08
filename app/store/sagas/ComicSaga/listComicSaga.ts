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
import *as loadComicAction from 'app/store/actions/ComicActions';
import { GetListComic } from 'app/services/Comic'
// import  { ILoginRequest, ILoginResponse } from 'app/models/api/login'
// Our worker Saga that logins the user
interface serverResponse {
  data: {
    result: boolean,
    data: any
  }
}
export default function* ListComicAsync({ start, end }: ReturnType<typeof loadComicAction.loadComicAction.requestLoadComic>) {
  yield put(loadComicAction.loadComicAction.enableLoader());
// call server
  try {
    const response: serverResponse = yield call(GetListComic, start, end)
    if (response.data.result) {
      yield putResolve(loadComicAction.loadComicAction.onComicLoadResponse(response.data.data));
      yield put(loadComicAction.loadComicAction.disableLoader());

    } else {
      Alert.alert(
        "Error",
        "loadFailed"
      )
      yield put(loadComicAction.loadComicAction.loadFailed());
      yield put(loadComicAction.loadComicAction.disableLoader());
    }
  } catch (err) {
    yield put(loadComicAction.loadComicAction.loadFailed());
    yield put(loadComicAction.loadComicAction.disableLoader());
    Alert.alert(
      "Error",
      err.toString()
    )
  }

}
