import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from 'helpers/Firebase';
import { adminRoot, currentUser } from 'constants/defaultValues';
import { getCurrentToken, getCurrentTokenRefrash, setCurrentToken, setCurrentUser } from 'helpers/Utils';
import { ENDPIONTS, createAPIEndpoint } from 'api';
import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../actions';

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from './actions';

export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}
const getToken = async (email, password) => {
  const bodyArray = { email, password };
  // axios.defaults.headers.post['Content-Type'] = 'application/json';
  return (
    createAPIEndpoint(ENDPIONTS.Login)
      .getInfo(bodyArray)
      .then((res) => res.data)
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);

      .catch((error) => error.response.data)
  );
};
// function getToken(apiUrl) {
//   return fetch(apiUrl)
//   .then(response => response.json())
//   .catch(error => ({ error }))
// }
const loginWithEmailPasswordAsync = async () => {
  // eslint-disable-next-line no-return-await
  axios.defaults.headers.common.Authorization = localStorage.getItem('token');
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  return createAPIEndpoint(ENDPIONTS.UserInfo)
    .fetchAll()
    .then((res) => res.data)
    .catch((error) => error)
};
//
// };
const refreshToken = async() => {
  try {
    axios.defaults.headers.common.Authorization=getCurrentToken();
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    const BodyRecord={"refresh": getCurrentTokenRefrash()};
    createAPIEndpoint(ENDPIONTS.Refresh).getInfo(BodyRecord)// axios.post('http://daadik.com/accounts/refresh/',{'refresh':localStorage.getItem('refresh')});//get info user
    .then((res) => {
      console.log(res.data)
      setCurrentToken(res.data)

    console.log('Token is refreshed');
    })
    .catch((error) => {
      console.log(error.errors);
      console.log('Error in refreshing token ',error.errors);
      window.location='user/login';
    });
    

  } catch (error) {
    console.log('Error in refreshing token ',error.errors);
   //  props.history.replace('/logout');
  }

}

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const token = yield call(getToken, email, password);

    if (!token.message) {
      setCurrentToken(token);
      const loginUser = yield call(loginWithEmailPasswordAsync);
      
      if (!loginUser.message) {
        console.log(loginUser)
        // const item = { uid: loginUser.user.uid, ...currentUser };
        setCurrentUser(loginUser);
        yield put(loginUserSuccess(loginUser));
        setInterval(refreshToken, 1000*5); // 1000*60*60*1 update data each one hour
        history.push(adminRoot);
      } else {
        yield put(loginUserError('خطای در دریافت اطلاعات کاربر رخ داده است، مجددا تلاش کنید'));
      }
    }
   
  } catch (error) {
    yield put(loginUserError( "رمز عبور با نام کاربری اشتباه است یا نام کاربری مسدود است"));
  }
}

export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) =>
  // eslint-disable-next-line no-return-await
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => error);

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      const item = { uid: registerUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(registerUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await auth
    .signOut()
    .then((user) => user)
    .catch((error) => error);
  history.push(adminRoot);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess('success'));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess('success'));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
