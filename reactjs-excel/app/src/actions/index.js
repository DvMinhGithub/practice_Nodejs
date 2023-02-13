import * as types from '../constants'
export function getItem(payload){
    return{
        type:types.GET_ITEM_REQUEST,
        payload
    }
}
export function getItemSuccess(payload){
    return{
        type:types.GET_ITEM_SUCCESS,
        payload
    }
}
export function getItemFailure(payload){
    return{
        type:types.GET_ITEM_FAILURE,
        payload
    }
}
export function addItem(payload){
    return{
        type:types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addItemSuccess(payload){
    return{
        type:types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addItemFailure(payload){
    return{
        type:types.ADD_ITEM_FAILURE,
        payload
    }
}

export function addExcel(payload){
    return{
        type:types.ADD_EXCEL_REQUEST,
        payload
    }
}
export function addExcelSuccess(payload){
    return{
        type:types.ADD_EXCEL_SUCCESS,
        payload
    }
}
export function addExcelFailure(payload){
    return{
        type:types.ADD_EXCEL_FAILURE,
        payload
    }
}

export function deleteItem(payload){
    return{
        type:types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function deleteItemSuccess(payload){
    return{
        type:types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function deleteItemFailure(payload){
    return{
        type:types.DELETE_ITEM_FAILURE,
        payload
    }
}

export function updateItem(payload){
    return{
        type:types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateItemSuccess(payload){
    return{
        type:types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateItemFailure(payload){
    return{
        type:types.UPDATE_ITEM_FAILURE,
        payload
    }
}


