import { createAction } from "@reduxjs/toolkit";
import * as types from '../constant';

export const actions = {
    getRequest: createAction(types.GET_REQUEST),
    getSuccess: createAction(types.GET_SUCCESS),
    getFailure: createAction(types.GET_FAILURE),

    addRequest: createAction(types.ADD_REQUEST),
    addSuccess: createAction(types.ADD_SUCCESS),
    addFailure: createAction(types.ADD_FAILURE),

    updateRequest: createAction(types.UPDATE_REQUEST),
    updateSuccess: createAction(types.UPDATE_SUCCESS),
    updateFailure: createAction(types.UPDATE_FAILURE),

    deleteRequest: createAction(types.DELETE_REQUEST),
    deleteSuccess: createAction(types.DELETE_SUCCESS),
    deleteFailure: createAction(types.DELETE_FAILURE),
    
    searchRequest: createAction(types.SEARCH_REQUEST),
    searchSuccess: createAction(types.SEARCH_SUCCESS),
    searchFailure: createAction(types.SEARCH_FAILURE),

    paginateRequest: createAction(types.PAGINATE_REQUEST),
    paginateSuccess: createAction(types.PAGINATE_SUCCESS),
    paginateFailure: createAction(types.PAGINATE_FAILURE),

    searchPaginateRequest: createAction(types.SEARCH_PAGINATE_REQUEST),
    searchPaginateSuccess: createAction(types.SEARCH_PAGINATE_SUCCESS),
    searchPaginateFailure: createAction(types.SEARCH_PAGINATE_FAILURE),
}