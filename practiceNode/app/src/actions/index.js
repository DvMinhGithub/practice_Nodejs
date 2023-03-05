import { createAction } from '@reduxjs/toolkit';
import {STORE} from '../contants'

export const actions = {
  addRequest: createAction(STORE.ADD_REQUEST),
  addSuccess: createAction(STORE.ADD_SUCCESS),
  addFailure: createAction(STORE.ADD_FAILURE),

  updateRequest: createAction(STORE.UPDATE_REQUEST),
  updateSuccess: createAction(STORE.UPDATE_SUCCESS),
  updateFailure: createAction(STORE.UPDATE_FAILURE),

  deleteRequest: createAction(STORE.DELETE_REQUEST),
  deleteSuccess: createAction(STORE.DELETE_SUCCESS),
  deleteFailure: createAction(STORE.DELETE_FAILURE),
    
  searchRequest: createAction(STORE.SEARCH_REQUEST),
  searchSuccess: createAction(STORE.SEARCH_SUCCESS),
  searchFailure: createAction(STORE.SEARCH_FAILURE),

  paginateRequest: createAction(STORE.PAGINATE_REQUEST),
  paginateSuccess: createAction(STORE.PAGINATE_SUCCESS),
  paginateFailure: createAction(STORE.PAGINATE_FAILURE),

  searchPaginateRequest: createAction(STORE.SEARCH_PAGINATE_REQUEST),
  searchPaginateSuccess: createAction(STORE.SEARCH_PAGINATE_SUCCESS),
  searchPaginateFailure: createAction(STORE.SEARCH_PAGINATE_FAILURE),
};