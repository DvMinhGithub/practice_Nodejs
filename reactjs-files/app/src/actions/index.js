import * as types from '../constants';

export function addItem(payload) {
    return {
        type: types.ADD_ITEM_REQUEST,
        payload,
    };
}
export function addItemSuccess(payload) {
    return {
        type: types.ADD_ITEM_SUCCESS,
        payload,
    };
}
export function addItemFailure(payload) {
    return {
        type: types.ADD_ITEM_FAILURE,
        payload,
    };
}
export function delItem(payload) {
    return {
        type: types.DELETE_ITEM_REQUEST,
        payload,
    };
}
export function delItemSuccess(payload) {
    return {
        type: types.DELETE_ITEM_SUCCESS,
        payload,
    };
}
export function delItemFailure(payload) {
    return {
        type: types.DELETE_ITEM_FAILURE,
        payload,
    };
}
export function updateItem(payload) {
    return {
        type: types.UPDATE_ITEM_REQUEST,
        payload,
    };
}
export function updateItemSuccess(payload) {
    return {
        type: types.UPDATE_ITEM_SUCCESS,
        payload,
    };
}
export function updateItemFailure(payload) {
    return {
        type: types.UPDATE_ITEM_FAILURE,
        payload,
    };
}
export function getItem(payload) {
    return {
        type: types.GET_ITEM_REQUEST,
        payload,
    };
}
export function getItemSuccess(payload) {
    return {
        type: types.GET_ITEM_SUCCESS,
        payload,
    };
}
export function getItemFailure(payload) {
    return {
        type: types.GET_ITEM_FAILURE,
        payload,
    };
}
export function deleteOne(payload) {
    return {
        type: types.DELETE_ONE_REQUEST,
        payload,
    };
}
export function deleteOneSuccess(payload) {
    return {
        type: types.DELETE_ONE_SUCCESS,
        payload,
    };
}
export function deleteOneFailure(payload) {
    return {
        type: types.DELETE_ONE_FAILURE,
        payload,
    };
}
export function searchItem(payload) {
    return {
        type: types.SEARCH_ITEM_REQUEST,
        payload,
    };
}
export function searchItemSuccess(payload) {
    return {
        type: types.SEARCH_ITEM_SUCCESS,
        payload,
    };
}
export function searchItemFailure(payload) {
    return {
        type: types.SEARCH_ITEM_FAILURE,
        payload,
    };
}

export function searchItem1(payload) {
    return {
        type: types.SEARCH_ITEM1_REQUEST,
        payload,
    };
}
export function searchItem1Success(payload) {
    return {
        type: types.SEARCH_ITEM1_SUCCESS,
        payload,
    };
}
export function searchItem1Failure(payload) {
    return {
        type: types.SEARCH_ITEM1_FAILURE,
        payload,
    };
}

export function searchItem2(payload) {
    return {
        type: types.SEARCH_ITEM2_REQUEST,
        payload,
    };
}
export function searchItem2Success(payload) {
    return {
        type: types.SEARCH_ITEM2_SUCCESS,
        payload,
    };
}
export function searchItem2Failure(payload) {
    return {
        type: types.SEARCH_ITEM2_FAILURE,
        payload,
    };
}
