import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
import * as actions from '../actions/index';
import * as Api from '../fetchAPIs/api';

function* getItem() {
    try {
        const res = yield Api.getApi();
        yield put(actions.getItemSuccess({ res: res.data }));
    } catch (error) {
        yield put(actions.getItemFailure());
    }
}
function* addItem(data) {
    try {
        let form = new FormData();
        form.append('name', data.payload.name);
        for (let i = 0; i < data.payload.img.length; i++) {
            form.append('img', data.payload.img[i]);
        }
        yield Api.addApi(form);
        yield put(actions.addItemSuccess({}));
        yield put(actions.getItem());
    } catch (error) {
        yield put(actions.addItemFailure());
    }
}
function* deleteItem(data) {
    try {
        yield Api.delApi(data);
        yield put(actions.delItemSuccess());
        yield put(actions.getItem());
    } catch (error) {
        yield put(actions.delItemFailure());
    }
}
function* updateItem(data) {
    try {
        let form = new FormData();
        for (let i = 0; i < data.payload.img.length; i++) {
            form.append('img', data.payload.img[i]);
        }
        form.append('name', data.payload.name);
        yield Api.updateApi(data, form);
        yield put(actions.updateItemSuccess());
        yield put(actions.getItem());
    } catch (error) {
        yield put(actions.updateItemFailure());
    }
}
function* deleteOne(data) {
    try {
        yield Api.delOneApi(data);
        yield put(actions.deleteOneSuccess());
        yield put(actions.getItem());
    } catch (error) {
        yield put(actions.delItemFailure());
    }
}

function* searchItem(data) {
    try {
        const res = yield Api.searchApi(data);
        yield put(
            actions.searchItemSuccess({
                res: res.search,
            }),
        );
    } catch (error) {
        yield put(actions.searchItemFailure());
    }
}

function* searchItem1(data) {
    try {
        const res = yield Api.searchApi(data);
        yield put(
            actions.searchItem1Success({
                res: res.search,
            }),
        );
    } catch (error) {
        yield put(actions.searchItem1Failure());
    }
}

function* searchItem2(data) {

    try {
        const res = yield Api.searchApi2(data);
        yield put(
            actions.searchItem2Success({
                res: [res.search2],
            }),
        );
    } catch (error) {
        yield put(actions.searchItem2Failure());
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.DELETE_ONE_REQUEST, deleteOne),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchItem),
    takeEvery(types.SEARCH_ITEM1_REQUEST, searchItem1),
    takeEvery(types.SEARCH_ITEM2_REQUEST, searchItem2),
];
