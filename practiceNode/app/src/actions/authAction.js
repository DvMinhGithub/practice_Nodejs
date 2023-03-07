import { createAction } from '@reduxjs/toolkit';
import types from './types/authTypes';

const actions = {
  loginRequest: createAction(types.LOGIN_REQUEST),
  loginSuccess: createAction(types.LOGIN_SUCCESS),
  loginFailure: createAction(types.LOGIN_FAILURE),
};

export default actions;
