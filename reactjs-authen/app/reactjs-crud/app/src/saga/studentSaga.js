import { put, takeLatest, select } from "@redux-saga/core/effects";
import { actions } from "../actions"
import * as types from '../constant';
import * as API from "../api"

function* getUser() {
    try {
        const res = yield API.getApi() 
        console.error(res);
        yield put(actions.getSuccess(res));
    } catch (err) {
        yield put(actions.getFailure());
    }
}

function* addUser(payload) {

    try {
        yield API.addApi(payload)
        yield put(actions.addSuccess());
        // yield put(actions.getRequest());
        const res = yield API.paginateApi(payload)
        yield put(actions.paginateRequest({ activePage: res.totalPages }));
    } catch (err) {
        yield put(actions.addFailure(err));
    }
}

function* updateUser(payload) {
    try {
        yield API.updateApi(payload)
        yield put(actions.updateSuccess())
        // yield put(actions.getRequest())
        const reducer = yield select((state) => {
            return {
                paginateUsers: state.student.paginateUsers,
                totalPages: state.student.totalPages,
                activePage: state.student.activePage,
            }
        })
        yield put(actions.paginateRequest({ activePage: reducer.activePage }));
    } catch (error) {
        yield put(actions.updateFailure(error))
    }
}

function* deleteUser(payload) {
    try {
        yield API.deleteApi(payload)
        yield put(actions.deleteSuccess())
        //  yield put(actions.getRequest())
        const reducer = yield select((state) => {
            return {
                paginateUsers: state.student.paginateUsers,
                totalPages: state.student.totalPages,
                activePage: state.student.activePage,
            }
        })
        if (reducer.paginateUsers.length > 1)
            yield put(actions.paginateRequest({ activePage: reducer.activePage }))
        else {
            if (reducer.activePage === 1)
                yield put(actions.paginateSuccess({ activePage: 1, totalPages: 1, data: [] }))
            else
                yield put(actions.paginateRequest({ activePage: reducer.activePage - 1 }))

        }
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}

function* searchUser(payload) {
    try {
        const res = yield API.searchApi(payload)
        yield put(actions.searchSuccess(res));
    } catch (err) {
        yield put(actions.searchFailure(err));
    }
}

function* paginateUser(data) {
    try {
        const res = yield API.paginateApi(data)
        if (res.totalPages === 0) res.totalPages = 1
        yield put(actions.paginateSuccess(res));
    } catch (err) {
        yield put(actions.paginateFailure(err));
    }
}

function* searchPaginateUser(data) {
    try {
        const res = yield API.searchPaginateApi(data);
        yield put(actions.searchPaginateSuccess(res));
    } catch (err) {
        yield put(actions.searchPaginateFailure());
    }
}

export default function* userSaga() {
    yield takeLatest(types.GET_REQUEST, getUser);
    yield takeLatest(types.ADD_REQUEST, addUser);
    yield takeLatest(types.UPDATE_REQUEST, updateUser);
    yield takeLatest(types.DELETE_REQUEST, deleteUser);
    yield takeLatest(types.SEARCH_REQUEST, searchUser);
    yield takeLatest(types.PAGINATE_REQUEST, paginateUser);
    yield takeLatest(types.SEARCH_PAGINATE_REQUEST, searchPaginateUser);
}