import * as types from '../constants';
const DEFAULT_STATE = {
    listSearch2: [],
    listSearch: [],
    listData: [],
    isFetching: true,
    dataFetched: false,
    error: false,
    errorMessage: null,
};

export default (state = DEFAULT_STATE, actions) => {
    switch (actions.type) {
        case types.GET_ITEM_REQUEST:
        case types.ADD_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.DELETE_ONE_REQUEST:
        case types.SEARCH_ITEM_REQUEST:
        case types.SEARCH_ITEM1_REQUEST:
        case types.SEARCH_ITEM2_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false,
            };

        case types.ADD_ITEM_SUCCESS:
        case types.DELETE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
        case types.DELETE_ONE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            };

        case types.GET_ITEM_SUCCESS:
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listData: actions.payload.res,
            };
        case types.SEARCH_ITEM1_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listSearch: actions.payload.res,
            };
        case types.SEARCH_ITEM2_SUCCESS:
            let newState = {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listSearch2: actions.payload.res,
            };
            return newState;

        case types.ADD_ITEM_FAILURE:
        case types.DELETE_ITEM_FAILURE:
        case types.UPDATE_ITEM_FAILURE:
        case types.GET_ITEM_FAILURE:
        case types.DELETE_ONE_FAILURE:
        case types.SEARCH_ITEM_FAILURE:
        case types.SEARCH_ITEM1_FAILURE:
        case types.SEARCH_ITEM2_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: 'Error message',
            };
        default:
            return state;
    }
};
