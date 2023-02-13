import { put, takeEvery } from "redux-saga/effects";
import * as actions from '../actions/index';
import * as types from '../constants';
import * as api from '../fetchAPIs';

function* paginate(data) {
    try {
        const res = yield api.paginateApi(data)
        yield put(actions.paginateItemSuccess({
            activePage: res.activePage, totalPage: res.totalPage,
            ItemPage: res.ItemPage
        }))
    } catch (error) {
        yield put(actions.paginateItemFailure({ errorMessage: error.Message }))
    }
}

function* addItem(data) {

    try {
        yield api.addApi(data.payload)
        yield put(actions.addItemSuccess())
        yield put(actions.paginateItem({ activePage: 1 }))
    } catch (error) {
        yield put(actions.addItemFailure({ errorMessage: 'add that bai' }))
    }
}

function* updateItem(data) {
    try {
        let form = new FormData()
        form.append('content', data.payload.content)
        form.append('title', data.payload.title)
        yield api.updateApi(data, form)
        yield put(actions.updateItemSuccess())
        yield put(actions.paginateItem({ activePage: 1 }))
    } catch {
        yield put(actions.updateItemFailure({ errorMessage: 'update that bai' }))
    }
}

function* delItem(data) {
    try {
        yield api.delApi(data)
        yield put(actions.delItemSuccess())
        yield put(actions.paginateItem({ activePage: 1 }))
    } catch (error) {
        yield put(actions.delItemFailure({ errorMessage: 'add that bai' }))
    }
}
function* searchPaginate(data) {
    try {
        const res = yield api.searchApi(data)
        yield put(actions.searchPaginateItemSuccess({
            totalPage: res.totalPage,
            activePage: res.activePage,
            ItemPage: res.ItemPage,
            nameSearch: res.nameSearch
        }))
    } catch (error) {
        yield put(actions.searchPaginateItemFailure({ errorMessage: error.Message }))
    }
}

export const ItemSaga = [
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.DELETE_ITEM_REQUEST, delItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.SEARCHPAGINATE_ITEM_REQUEST, searchPaginate),
    takeEvery(types.PAGINATE_ITEM_REQUEST, paginate)]