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
import { loadComicInfoAction } from 'app/store/actions/ComicActions';
import *as loginActions from 'app/store/actions/loginActions'
import { GetComicInfo, GetChapterList } from 'app/services/Comic'
import { Author } from 'app/screens/ComicInfo/component';
// import  { ILoginRequest, ILoginResponse } from 'app/models/api/login'
// Our worker Saga that logins the user
interface serverResponse {
  data: {
    result: boolean,
    data: any
  }
}
export default function* infoComicAsync({ id }: ReturnType<typeof loadComicInfoAction.requestInfoComic>) {
  yield put(loadComicInfoAction.enableLoader());
  const response: serverResponse = yield call(GetComicInfo, id)
  if (response.data.result) {
    const listChapter: serverResponse = yield call(GetChapterList, id)
    yield put(loadComicInfoAction.onComicInfoResponse(response.data.data));
    yield put(loginActions.loadStartHistory())
    yield put(loginActions.setHistory({
      _id: response.data.data._id,
      Name: response.data.data.Name,
      Author: response.data.data.Author,
      Cover: response.data.data.Cover
    }))
    yield put(loginActions.loadEndHistory())
    if (listChapter.data.result) {
      yield put(loadComicInfoAction.onChapterListResponse(listChapter.data.data))
    } else {
      Alert.alert(
        "Error",
        "loadChapterFailed"
      )
      yield put(loadComicInfoAction.loadChapterFailed());
    }
    yield put(loadComicInfoAction.disableLoader());

  } else {
    Alert.alert(
      "Error",
      "loadFailed"
    )
    yield put(loadComicInfoAction.loadFailed());
    yield put(loadComicInfoAction.disableLoader());
  }
}
