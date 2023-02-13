import * as types from '../constant'

const INITIAL_STATE = {
    listStudent: [],
    isFetching: false,
    isError: false,
    message: "",
    paginateUsers: [],
    activePage: 1,
    totalPages: 1,
    
}

const studentReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.GET_REQUEST:
        case types.ADD_REQUEST:
        case types.UPDATE_REQUEST:
        case types.DELETE_REQUEST:
        case types.SEARCH_REQUEST:
        case types.PAGINATE_REQUEST:
        case types.SEARCH_PAGINATE_REQUEST:
            return {
                ...state, isFetching: true
            }
        case types.GET_SUCCESS:
        case types.SEARCH_SUCCESS:
            return {
                ...state, isFetching: false, listStudent: payload.data
            }
        case types.ADD_SUCCESS:
        case types.UPDATE_SUCCESS:
        case types.DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case types.PAGINATE_SUCCESS:
        case types.SEARCH_PAGINATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                paginateUsers: payload.data,
                activePage: payload.activePage,
                totalPages: payload.totalPages,
            }; 
        case types.GET_FAILURE:
        case types.ADD_FAILURE:
        case types.UPDATE_FAILURE:
        case types.DELETE_FAILURE:
        case types.SEARCH_FAILURE:
        case types.PAGINATE_FAILURE:
        case types.SEARCH_PAGINATE_FAILURE:
            return {
                ...state, isFetching: false, isError: false, message: payload
            }
        default: return state
    }
}

export default studentReducer 