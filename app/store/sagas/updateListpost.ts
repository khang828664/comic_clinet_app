/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginActions';
import { loginUser, getListPost } from 'app/services/loginUser';
import { ILoginRequest, ILoginResponse } from 'app/models/api/login'
// Our worker Saga that logins the user
interface serverResponse {
  data: {
    result: boolean,
    data: any
  }
}
export default function* updateListPostAsync({ _idUser }: ReturnType<typeof loginActions.requestUpdateListPost>) {
  yield put(loginActions.enableLoader());
  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };
  try {
  const responseList: serverResponse = yield call(getListPost, _idUser)
  console.log(responseList)
    if ( responseList.data.result) {
      yield put(loginActions.responseListComic(responseList.data.data));
      yield put(loginActions.disableLoader());
    } else {
      yield put(loginActions.disableLoader());
      Alert.alert(
        "Error",
        "Username and Password incorrect")
    }
  } catch (err:any) {
      Alert.alert(
        "Error",
        err.toString()
      )
  }
}
