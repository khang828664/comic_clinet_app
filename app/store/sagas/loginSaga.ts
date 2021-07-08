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
export default function* loginAsync({ username, password }: ReturnType<typeof loginActions.requestLogin>) {
  yield put(loginActions.enableLoader());

  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };
  try {
  const response: serverResponse = yield call(loginUser, username, password)
  console.log(response.data.data._id)
  const responseList: serverResponse = yield call(getListPost, response.data.data._id)
  console.log()
  let sumResponse = {
    userInfo: response.data.data,
    listPost: responseList.data.data
  }
 
    if (response.data.result) {
      yield put(loginActions.onLoginResponse(sumResponse));
      yield put(loginActions.disableLoader());

    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
      Alert.alert(
        "Error",
        "Username and Password incorrect")
    }
  } catch (err) {
      Alert.alert(
        "Error",
        err.toString()
      )
  }
}
