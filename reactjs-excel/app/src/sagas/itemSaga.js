import * as actions from '../actions/index'
import { put, takeEvery } from "redux-saga/effects";
import * as types from '../constants'
import callApi from '../fetchAPIs/callAPI'
import addApi from '../fetchAPIs/addExport';

function* getListItem() {
    try {
        const res = yield callApi('GET', '/excel')
        yield put(actions.getItemSuccess(
            {listStudent: res.data}
        ))
    } catch (error) {
        yield put(actions.getItemFailure({
            errorMessage: 'get that bai'
        }))
    }
}
function* addExcel(data){
    try {
        let form = new FormData()
        for (let i = 0; i < data.payload.file.length; i++) {
            form.append('file',data.payload.file[i])
        }
       yield addApi(form)
        yield put (actions.addExcelSuccess())
        yield put(actions.getItem())
    } catch (error) {
        yield put(actions.addExcelFailure({errorMessage:'add that bai'}))
    }
}

function* deleteItem(data){
    try{
        yield callApi('DELETE',`/${data.payload.id}`)
        yield put(actions.deleteItemSuccess())
        yield put(actions.getItem())
    }catch(error){
        yield put(actions.deleteItemFailure())
    }
}

function* addItem(data){
    console.log(data.payload,'daaaaaaaaaaaaa');
    try {
        yield callApi('POST','/excel',data.payload)
        yield put(actions.addItemSuccess())
        yield put(actions.getItem())
    } catch (error) {
        yield put(actions.addItemFailure())
    }
}

function* updateItem(data){
    try {
        yield callApi('PUT',`/${data.payload.id}`,data.payload)
        yield put(actions.updateItemSuccess())
        yield put(actions.getItem())
    } catch (error) {
        yield put(actions.updateItemFailure())
    }
}

export const ItemSaga = [takeEvery(types.GET_ITEM_REQUEST,getListItem),
takeEvery(types.ADD_EXCEL_REQUEST,addExcel),
takeEvery(types.DELETE_ITEM_REQUEST,deleteItem)
,takeEvery(types.ADD_ITEM_REQUEST,addItem)
,takeEvery(types.UPDATE_ITEM_REQUEST,updateItem)

]