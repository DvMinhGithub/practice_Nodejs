import * as types from '../constants'

const DEFAULT_STATE = {
    listData: [],
    isFetching: true,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage:1,
    totalPage:1
}
export default (state = DEFAULT_STATE, actions) => {
    switch (actions.type) {
        case types.GET_ITEM_REQUEST:
            
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listData: actions.payload.listStudent
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
            case types.ADD_ITEM_REQUEST:
                return {
                    ...state,
                    isFetching: true,
                    dataFetched: false
                }
            case types.ADD_ITEM_SUCCESS:
    
                return {
                    ...state,
                    isFetching: false,
                    dataFetched: true,
                    error: false,
                    errorMessage: null,
                }
            case types.ADD_ITEM_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    dataFetched: false,
                    error: true,
                    errorMessage: actions.payload.errorMessage
                }
                case types.ADD_EXCEL_REQUEST:
                    return {
                        ...state,
                        isFetching: true,
                        dataFetched: false
                    }
                case types.ADD_EXCEL_SUCCESS:
        
                    return {
                        ...state,
                        isFetching: false,
                        dataFetched: true,
                        error: false,
                        errorMessage: null,
                    }
                case types.ADD_EXCEL_FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        dataFetched: false,
                        error: true,
                        errorMessage: actions.payload.errorMessage
                    }
                    case types.DELETE_ITEM_REQUEST:
                        return {
                            ...state,
                            isFetching: true,
                            dataFetched: false
                        }
                    case types.DELETE_ITEM_SUCCESS:
            
                        return {
                            ...state,
                            isFetching: false,
                            dataFetched: true,
                            error: false,
                            errorMessage: null,
                        }
                    case types.DELETE_ITEM_FAILURE:
                        return {
                            ...state,
                            isFetching: false,
                            dataFetched: false,
                            error: true,
                            errorMessage: actions.payload.errorMessage
                        }

                        case types.UPDATE_ITEM_REQUEST:
                        return {
                            ...state,
                            isFetching: true,
                            dataFetched: false
                        }
                    case types.UPDATE_ITEM_SUCCESS:
            
                        return {
                            ...state,
                            isFetching: false,
                            dataFetched: true,
                            error: false,
                            errorMessage: null,
                        }
                    case types.UPDATE_ITEM_FAILURE:
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