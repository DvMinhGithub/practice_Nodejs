import { createAction } from "@reduxjs/toolkit";
import * as types from '../constants';

export const actions = {
    signUpRequest: createAction(types.SIGN_UP_REQUEST),
    signUpSuccess: createAction(types.SIGN_UP_SUCCESS),
    signUpFailure: createAction(types.SIGN_UP_FAILURE),

    loginRequest: createAction(types.LOGIN_REQUEST),
    loginSuccess: createAction(types.LOGIN_SUCCESS),
    loginFailure: createAction(types.LOGIN_FAILURE),

    getStudentRequest: createAction(types.GET_STUDENT_REQUEST),
    getStudentSuccess: createAction(types.GET_STUDENT_SUCCESS),
    getStudentFailure: createAction(types.GET_STUDENT_FAILURE),

    addStudentRequest: createAction(types.ADD_STUDENT_REQUEST),
    addStudentSuccess: createAction(types.ADD_STUDENT_SUCCESS),
    addStudentFailure: createAction(types.ADD_STUDENT_FAILURE),

    updateStudentRequest: createAction(types.UPDATE_STUDENT_REQUEST),
    updateStudentSuccess: createAction(types.UPDATE_STUDENT_SUCCESS),
    updateStudentFailure: createAction(types.UPDATE_STUDENT_FAILURE),

    deleteStudentRequest: createAction(types.DELETE_STUDENT_REQUEST),
    deleteStudentSuccess: createAction(types.DELETE_STUDENT_SUCCESS),
    deleteStudentFailure: createAction(types.DELETE_STUDENT_FAILURE),

    searchRequest: createAction(types.SEARCH_REQUEST),
    searchSuccess: createAction(types.SEARCH_SUCCESS),
    searchFailure: createAction(types.SEARCH_FAILURE),
    
}