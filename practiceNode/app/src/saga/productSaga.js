import { put, takeLatest, select } from '@redux-saga/core/effects';
import actions from '../actions/productAction';
import types from '../actions/types/productTypes';
// import { Api } from '../config/api';
import callApi from '../config/axios';
import { contants } from '../contants';

function* addUser(data) {
  try {
    yield callApi('post', '/', data);
    yield put(actions.addSuccess());
    const params = {
      activePage: data.payload.activePage,
      limit: contants.LIMIT,
    };
    const res = yield callApi('get', '/paginate', {}, params);
    yield put(actions.paginateRequest({ activePage: res.totalPage }));
  } catch (err) {
    yield put(actions.addFailure(err));
  }
}
function* updateUser(data) {
  try {
    yield callApi('put', `/${data.payload._id}`, data.payload);
    yield put(actions.updateSuccess());
    const reducer = yield select(state => {
      return {
        paginateProduct: state.product.paginateProduct,
        totalPage: state.product.totalPage,
        activePage: state.product.activePage,
      };
    });
    yield put(actions.paginateRequest({ activePage: reducer.activePage }));
  } catch (error) {
    yield put(actions.updateFailure(error));
  }
}
function* deleteUser(data) {
  try {
    yield callApi('delete', `/${data.payload}`);
    yield put(actions.deleteSuccess());
    const reducer = yield select(state => {
      return {
        paginateProduct: state.product.paginateProduct,
        totalPage: state.product.totalPage,
        activePage: state.product.activePage,
      };
    });
    if (reducer.paginateProduct.length > 1)
      yield put(actions.paginateRequest({ activePage: reducer.activePage }));
    else {
      if (reducer.activePage === 1)
        yield put(
          actions.paginateSuccess({ activePage: 1, totalPage: 1, data: [] })
        );
      else
        yield put(
          actions.paginateRequest({ activePage: reducer.activePage - 1 })
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
    const res = yield callApi('get', '/paginate', {}, params);
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
    const res = yield callApi('get', '/searchPaginate', {}, params);
    yield put(actions.searchPaginateSuccess(res));
  } catch (err) {
    yield put(actions.searchPaginateFailure());
  }
}
export default function* productSaga() {
  yield takeLatest(types.ADD_REQUEST, addUser);
  yield takeLatest(types.UPDATE_REQUEST, updateUser);
  yield takeLatest(types.DELETE_REQUEST, deleteUser);
  yield takeLatest(types.PAGINATE_REQUEST, paginateUser);
  yield takeLatest(types.SEARCH_PAGINATE_REQUEST, searchPaginateUser);
}
