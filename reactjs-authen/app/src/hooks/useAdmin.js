import { useDispatch, useSelector } from "react-redux"
import { actions } from "../actions"


 const useAdmin =() => {
    let dispatch = useDispatch();

    let items = useSelector(state => state.items.listData);

    let initLoad = () => dispatch(actions.getStudentRequest())
    let addItem = (data) => dispatch(actions.addStudentRequest(data))
    let updateItem = (data) => dispatch(actions.searchRequest(data))
    let deleteItem = (data) => dispatch(actions.updateStudentRequest(data))
    let searchItem = (data) => dispatch(actions.deleteStudentRequest(data))

    return (
        items,
        initLoad,
        addItem,
        updateItem,
        deleteItem,
        searchItem
    )
}
export default useAdmin