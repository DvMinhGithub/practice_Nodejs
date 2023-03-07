import { put, select, takeEvery } from '@redux-saga/core/effects';

import actions from '../actions/productAction';
import types from '../actions/types/productTypes';
import callApi from '../config/axios';
import { contants } from '../contants';

function* addUser(data) {
  try {
    const resAdd = yield callApi('post', `${contants.productUrl}/`, data.payload);
    contants.showNotification(resAdd);
    yield put(actions.addSuccess(resAdd));
    const params = {
      activePage: data.payload.activePage,
      limit: contants.LIMIT,
    };
    const res = yield callApi('get', `${contants.productUrl}/paginate`, {}, params);
    yield put(actions.paginateRequest({ activePage: res.totalPage }));
  } catch (err) {
    yield put(actions.addFailure(err));
  }
}
function* updateUser(data) {
  try {
    const res = yield callApi('put', `${contants.productUrl}/${data.payload._id}`, data.payload);
    yield put(actions.updateSuccess(res));
    const reducer = yield select((state) => ({
      paginateProduct: state.reducer.paginateProduct,
      totalPage: state.reducer.totalPage,
      activePage: state.reducer.activePage,
    }));
    yield put(actions.paginateRequest({ activePage: reducer.activePage }));
  } catch (error) {
    yield put(actions.updateFailure(error));
  }
}
function* deleteUser(data) {
  try {
    const res = yield callApi('delete', `${contants.productUrl}/${data.payload}`);
    yield put(actions.deleteSuccess(res));
    const reducer = yield select((state) => ({
      paginateProduct: state.reducer.paginateProduct,
      totalPage: state.reducer.totalPage,
      activePage: state.reducer.activePage,
    }));
    if (reducer.paginateProduct.length > 1) yield put(actions.paginateRequest({ activePage: reducer.activePage }));
    else if (reducer.activePage === 1) {
      yield put(
        actions.paginateSuccess({ activePage: 1, totalPage: 1, data: [] }),
      );
    } else {
      yield put(
        actions.paginateRequest({ activePage: reducer.activePage - 1 }),
      );
    }
  } catch (error) {
    yield put(actions.deleteFailure(error));
  }
}

function* paginateUser(data) {
  try {
    const params = {
      activePage: data.payload.activePage,
      limit: contants.LIMIT,
    };
    const res = yield callApi('get', `${contants.productUrl}/paginate`, {}, params);
    if (res.totalPage === 0) res.totalPage = 1;
    yield put(actions.paginateSuccess(res));
  } catch (err) {
    yield put(actions.paginateFailure(err));
  }
}
function* searchPaginateUser(data) {
  try {
    const params = {
      activePage: data.payload.activePage,
      limit: contants.LIMIT,
      textSearch: data.payload.name,
    };
    const res = yield callApi('get', `${contants.productUrl}/searchPaginate`, {}, params);
    yield put(actions.searchPaginateSuccess(res));
  } catch (err) {
    yield put(actions.searchPaginateFailure());
  }
}
export const productSaga = [
  takeEvery(types.ADD_REQUEST, addUser),
  takeEvery(types.UPDATE_REQUEST, updateUser),
  takeEvery(types.DELETE_REQUEST, deleteUser),
  takeEvery(types.PAGINATE_REQUEST, paginateUser),
  takeEvery(types.SEARCH_PAGINATE_REQUEST, searchPaginateUser)
]

