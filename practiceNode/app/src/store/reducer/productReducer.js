import types from '../../actions/types/productTypes';

const INITIAL_STATE = {
  listProduct: [],
  message: '',
  paginateProduct: [],
  activePage: 1,
  totalPage: 1,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_REQUEST:
    case types.ADD_REQUEST:
    case types.UPDATE_REQUEST:
    case types.DELETE_REQUEST:
    case types.SEARCH_REQUEST:
    case types.PAGINATE_REQUEST:
    case types.SEARCH_PAGINATE_REQUEST:
      return {
        ...state,
      };
    case types.GET_SUCCESS:
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        listProduct: action.payload.data,
      };
    case types.ADD_SUCCESS:
    case types.UPDATE_SUCCESS:
    case types.DELETE_SUCCESS:
      return {
        ...state,
      };
    case types.PAGINATE_SUCCESS:
    case types.SEARCH_PAGINATE_SUCCESS:
      return {
        ...state,
        paginateProduct: action.payload.data,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
      };
    case types.GET_FAILURE:
    case types.ADD_FAILURE:
    case types.UPDATE_FAILURE:
    case types.DELETE_FAILURE:
    case types.SEARCH_FAILURE:
    case types.PAGINATE_FAILURE:
    case types.SEARCH_PAGINATE_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
