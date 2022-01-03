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
import { loginUser, getListPost, createAccount } from 'app/services/loginUser';
import { ILoginRequest, ILoginResponse } from 'app/models/api/login'
// Our worker Saga that logins the user
interface serverResponse {
  data: {
    result: boolean,
    data: any
  }
}
export default function* createUserAsync({ userData }: ReturnType<typeof loginActions.createAccount>) {
  yield put(loginActions.enableLoader());

  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };
  const response: serverResponse = yield call(createAccount, userData)
  console.log(response)
  if (response) {
    if (response.data.result) {
      yield put(loginActions.responseUser(response.data.data));
      yield put(loginActions.disableLoader());
    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
    }
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    Alert.alert(
      "Error",
      "Network Error please check it again")
  }
}
