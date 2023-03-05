import { STORE } from '../contants';
const INITIAL_STATE = {
  listProduct: [],
  isFetching: false,
  isError: false,
  message: '',
  paginateProduct: [],
  activePage: 1,
  totalPage: 1,
};
const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case STORE.GET_REQUEST:
  case STORE.ADD_REQUEST:
  case STORE.UPDATE_REQUEST:
  case STORE.DELETE_REQUEST:
  case STORE.SEARCH_REQUEST:
  case STORE.PAGINATE_REQUEST:
  case STORE.SEARCH_PAGINATE_REQUEST:
    return {
      ...state, isFetching: true
    };
  case STORE.GET_SUCCESS:
  case STORE.SEARCH_SUCCESS:
    return {
      ...state, isFetching: false, listProduct: payload.data
    };
  case STORE.ADD_SUCCESS:
  case STORE.UPDATE_SUCCESS:
  case STORE.DELETE_SUCCESS:
    return {
      ...state,
      isFetching: false,
    };
  case STORE.PAGINATE_SUCCESS:
  case STORE.SEARCH_PAGINATE_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      paginateProduct: payload.data,
      activePage: payload.activePage,
      totalPage: payload.totalPage,
    };
  case STORE.GET_FAILURE:
  case STORE.ADD_FAILURE:
  case STORE.UPDATE_FAILURE:
  case STORE.DELETE_FAILURE:
  case STORE.SEARCH_FAILURE:
  case STORE.PAGINATE_FAILURE:
  case STORE.SEARCH_PAGINATE_FAILURE:
    return {
      ...state, isFetching: false, isError: false, message: payload
    };
  default: return state;
  }
};
export default productReducer; 