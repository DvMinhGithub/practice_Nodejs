import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions/productAction';

export const UseProduct = () => {
  const dispatch = useDispatch();

  const paginateProduct = useSelector((state) => state.reducer.paginateProduct);
  const totalPage = useSelector((state) => state.reducer.totalPage);
  const activePage = useSelector((state) => state.reducer.activePage);
  const success = useSelector((state) => state.reducer.success);
  const message = useSelector((state) => state.reducer.message);

  const handleGetProduct = () => dispatch(actions.getRequest());
  const handleAddProduct = (data) => dispatch(actions.addRequest(data));
  const updateProduct = (data) => dispatch(actions.updateRequest(data));
  const deleteProduct = (data) => dispatch(actions.deleteRequest(data));
  const handleSearchProduct = (data) => dispatch(actions.searchRequest(data));
  const handlePaginateProduct = (data) => dispatch(actions.paginateRequest(data));
  const handleSearchPaginateProduct = (data) => dispatch(actions.searchPaginateRequest(data));

  return {
    paginateProduct,
    totalPage,
    activePage,
    success,
    message,

    handleGetProduct,
    handleAddProduct,
    updateProduct,
    deleteProduct,
    handleSearchProduct,
    handlePaginateProduct,
    handleSearchPaginateProduct,
  };
};
