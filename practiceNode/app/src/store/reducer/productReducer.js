import productTypes from '../../actions/types/productTypes';
import authTypes from '../../actions/types/authTypes'

const INITIAL_STATE = {
  success: false,
  message: '',
  paginateProduct: [],
  activePage: 1,
  totalPage: 1,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.GET_REQUEST:
    case productTypes.ADD_REQUEST:
    case productTypes.UPDATE_REQUEST:
    case productTypes.DELETE_REQUEST:
    case productTypes.SEARCH_REQUEST:
    case productTypes.PAGINATE_REQUEST:
    case productTypes.SEARCH_PAGINATE_REQUEST:
    case authTypes.LOGIN_REQUEST:
      return {

        ...state,
      };
    case productTypes.GET_SUCCESS:
    case productTypes.SEARCH_SUCCESS:
      return {
        ...state
      };
    case productTypes.ADD_SUCCESS:
    case productTypes.UPDATE_SUCCESS:
    case productTypes.DELETE_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state, success: action.payload.success,
        message: action.payload.message
      };
    case productTypes.PAGINATE_SUCCESS:
    case productTypes.SEARCH_PAGINATE_SUCCESS:
      return {
        ...state,
        paginateProduct: action.payload.data,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
      };
    case productTypes.GET_FAILURE:
    case productTypes.ADD_FAILURE:
    case productTypes.UPDATE_FAILURE:
    case productTypes.DELETE_FAILURE:
    case productTypes.SEARCH_FAILURE:
    case productTypes.PAGINATE_FAILURE:
    case productTypes.SEARCH_PAGINATE_FAILURE:
    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export default productReducer;
