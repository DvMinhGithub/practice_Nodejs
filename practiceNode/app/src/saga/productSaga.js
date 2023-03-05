import { put, takeLatest, select } from '@redux-saga/core/effects';
import { actions } from '../actions';
import { Api } from '../config/api';
import callApi from '../config/apiV2';
import { STORE } from '../contants';

function* addUser(payload) {
  try {
    yield callApi('post', '/', payload);
    yield put(actions.addSuccess());
    const res = yield Api.paginateApi(payload);
    yield put(actions.paginateRequest({ activePage: res.totalPage }));
  } catch (err) {
    yield put(actions.addFailure(err));
  }
}
function* updateUser(data) {
  console.log("file: productSaga.js:18 ~ payload",data.payload);
  try {
  yield callApi('put',`/${data.payload._id}`, {payload: data.payload});
    yield put(actions.updateSuccess());
    const reducer = yield select((state) => {
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
function* deleteUser(payload) {
  try {
    yield Api.deleteApi(payload);
    yield put(actions.deleteSuccess());
    const reducer = yield select((state) => {
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
        yield put(actions.paginateSuccess({ activePage: 1, totalPage: 1, data: [] }));
      else
        yield put(actions.paginateRequest({ activePage: reducer.activePage - 1 }));
    }
  } catch (error) {
    yield put(actions.deleteFailure(error));
  }
}
function* searchUser(payload) {
  try {
    const res = yield Api.searchApi(payload);
    yield put(actions.searchSuccess(res));
  } catch (err) {
    yield put(actions.searchFailure(err));
  }
}
function* paginateUser(data) {
  try {
    const res = yield callApi('get', '/paginate', {}, {
      activePage: data.payload.activePage,
      limit: STORE.LIMIT
    })
    if (res.totalPage === 0) res.totalPage = 1;
    yield put(actions.paginateSuccess(res));
  } catch (err) {
    yield put(actions.paginateFailure(err));
  }
}
function* searchPaginateUser(data) {
  try {
    const res = yield Api.searchPaginateApi(data);
    yield put(actions.searchPaginateSuccess(res));
  } catch (err) {
    yield put(actions.searchPaginateFailure());
  }
}
export default function* productSaga() {
  yield takeLatest(STORE.ADD_REQUEST, addUser);
  yield takeLatest(STORE.UPDATE_REQUEST, updateUser);
  yield takeLatest(STORE.DELETE_REQUEST, deleteUser);
  yield takeLatest(STORE.SEARCH_REQUEST, searchUser);
  yield takeLatest(STORE.PAGINATE_REQUEST, paginateUser);
  yield takeLatest(STORE.SEARCH_PAGINATE_REQUEST, searchPaginateUser);
}