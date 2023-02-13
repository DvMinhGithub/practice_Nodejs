import * as types from '../constants'

export const actions = {
    getListItem: (payload) => { return { type: types.GET_ITEM_REQUEST, payload } },
    getListItemSuccess: (payload) => { return { types: types.GET_ITEM_SUCCESS, payload } },
    getListItemFailure: (payload) => { return { types: types.GET_ITEM_FAILURE, payload } },
}
export function getListItem(payload) {
    return {
        type: types.GET_ITEM_REQUEST,
        payload
    }
}
export function getListItemSuccess(payload) {
    return {
        type: types.GET_ITEM_SUCCESS,
        payload
    }
}
export function getListItemFailure(payload) {
    return {
        type: types.GET_ITEM_FAILURE,
        payload
    }
}
export function addItem(payload) {
    return {
        type: types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addItemSuccess(payload) {
    return {
        type: types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addItemFailure(payload) {
    return {
        type: types.ADD_ITEM_FAILURE,
        payload
    }
}
export function delItem(payload) {
    return {
        type: types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function delItemSuccess(payload) {
    return {
        type: types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function delItemFailure(payload) {
    return {
        type: types.DELETE_ITEM_FAILURE,
        payload
    }
}
export function updateItem(payload) {
    return {
        type: types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateItemSuccess(payload) {
    return {
        type: types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateItemFailure(payload) {
    return {
        type: types.UPDATE_ITEM_FAILURE,
        payload
    }
}
export function paginateItem(payload) {
    return {
        type: types.PAGINATE_ITEM_REQUEST,
        payload
    }
}
export function paginateItemSuccess(payload) {
    return {
        type: types.PAGINATE_ITEM_SUCCESS,
        payload
    }
}
export function paginateItemFailure(payload) {
    return {
        type: types.PAGINATE_ITEM_FAILURE,
        payload
    }
}
export function searchPaginateItem(payload) {
    return {
        type: types.SEARCHPAGINATE_ITEM_REQUEST,
        payload
    }
}
export function searchPaginateItemSuccess(payload) {
    return {
        type: types.SEARCHPAGINATE_ITEM_SUCCESS,
        payload
    }
}
export function searchPaginateItemFailure(payload) {
    return {
        type: types.SEARCHPAGINATE_ITEM_FAILURE,
        payload
    }
}
