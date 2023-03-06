import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions/productAction';
export const UseProduct = () => {
  const dispatch = useDispatch();

  const listProduct = useSelector(state => state.product.listProduct);
  const paginateProduct = useSelector(state => state.product.paginateProduct);
  const totalPage = useSelector(state => state.product.totalPage);
  const activePage = useSelector(state => state.product.activePage);

  const handleGetProduct = () => dispatch(actions.getRequest());
  const handleAddProduct = data => dispatch(actions.addRequest(data));
  const handleUpdateProduct = data => dispatch(actions.updateRequest(data));
  const handleDeleteProduct = data => dispatch(actions.deleteRequest(data));
  const handleSearchProduct = data => dispatch(actions.searchRequest(data));
  const handlePaginateProduct = data => dispatch(actions.paginateRequest(data));
  const handleSearchPaginateProduct = data =>
    dispatch(actions.searchPaginateRequest(data));

  return {
    listProduct,
    paginateProduct,
    totalPage,
    activePage,
    handleGetProduct,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleSearchProduct,
    handlePaginateProduct,
    handleSearchPaginateProduct,
  };
};
