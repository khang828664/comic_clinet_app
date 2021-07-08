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
import { GetComicListAuthor, GetComicListName } from 'app/services/Comic'
// import  { ILoginRequest, ILoginResponse } from 'app/models/api/login'
// Our worker Saga that logins the user
interface serverResponse {
  data: {
    result: boolean,
    data: any
  }
}
export default function* searchComicAsync({ valueSearch }: ReturnType<typeof ComicAction.searchComicAction.requestLoadComic>) {
  console.log(valueSearch)
  yield put(ComicAction.searchComicAction.enableLoader());
  const responseName: serverResponse = yield call(GetComicListName, valueSearch)
  const responseAuthor: serverResponse = yield call(GetComicListAuthor, valueSearch)
  console.log(responseName.data.data)
  if (responseName.data.result || responseAuthor.data.result) {
    let response = {
      comicListName: responseName.data.data,
      comicListAuthor: responseAuthor.data.data
    }
    yield put(ComicAction.searchComicAction.onComicLoadResponse(response));
    yield put(ComicAction.searchComicAction.disableLoader());

  } else {
    yield put(ComicAction.searchComicAction.loadFailed());
    yield put(ComicAction.searchComicAction.disableLoader());
  }
}
