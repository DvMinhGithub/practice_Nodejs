import { put, takeLatest } from '@redux-saga/core/effects';
import types from "../actions/types/authTypes";
import actions from '../actions/authAction'
import callApi from "../config/axios";
import { contants } from '../contants';


function* login(data) {
  try {
    const res = yield callApi('post', `${contants.userUrl}/login`, data.payload)
    contants.showNotification(res)
    yield put(actions.loginSuccess(res))
    if (res.success) {
      localStorage.setItem('token', res.token)
      // localStorage.setItem('role', res.role)
      window.location.pathname = '/';
    }
  } catch (error) {
    yield put(actions.loginFailure(error))
  }
}

export const authSaga = [
  takeLatest(types.LOGIN_REQUEST, login)
]

