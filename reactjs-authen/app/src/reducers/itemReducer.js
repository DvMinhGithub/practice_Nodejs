import * as types from '../constants'

const DEFAULT_STATE = {
    listData: [],
    isFetching: true,
    dataFetched: false,
    error: false,
    errorMessage: null,
}
const ItemReducer = (state = DEFAULT_STATE, actions) => {
    switch (actions.type) {
        case types.SIGN_UP_REQUEST:
        case types.LOGIN_REQUEST:
        case types.GET_STUDENT_REQUEST:
        case types.ADD_STUDENT_REQUEST:
        case types.UPDATE_STUDENT_REQUEST:
        case types.DELETE_STUDENT_REQUEST:
        case types.SEARCH_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.GET_STUDENT_SUCCESS:
        case types.SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listData: actions.payload.data,
            }
        case types.ADD_STUDENT_SUCCESS:
        case types.DELETE_STUDENT_SUCCESS:
        case types.UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }

        case types.SIGN_UP_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.ADD_STUDENT_FAILURE:
        case types.UPDATE_STUDENT_FAILURE:
        case types.DELETE_STUDENT_FAILURE:
        case types.SIGN_UP_FAILURE:
        case types.SEARCH_FAILURE:
        case types.LOGIN_FAILURE:
        case types.GET_STUDENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        default:
            return state
    }
}

export default ItemReducer