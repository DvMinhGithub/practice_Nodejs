import { useDispatch, useSelector } from "react-redux"
import { actions } from "../actions"

export const UseStudent = () => {
    const dispatch = useDispatch();
    const listStudents = useSelector((state) => state.student.listStudent)
    const paginateUsers = useSelector((state) => state.student.paginateUsers)
    const totalPages = useSelector((state) => state.student.totalPages)
    const activePage = useSelector((state) => state.student.activePage)

    const handleGetStudents = () => dispatch(actions.getRequest())
    const handleAddStudents = (data) => dispatch(actions.addRequest(data))
    const handleUpdateStudents = (data) => dispatch(actions.updateRequest(data))
    const handleDeleteStudents = (data) => dispatch(actions.deleteRequest(data))
    const handleSearchStudents = (data) => dispatch(actions.searchRequest(data))
    const handlePaginateStudents = (data) => dispatch(actions.paginateRequest(data))
    const handleSearchPaginateStudents = (data) => dispatch(actions.searchPaginateRequest(data))

    return {
        listStudents,
        paginateUsers,
        totalPages, activePage,
        handleGetStudents,
        handleAddStudents,
        handleUpdateStudents,
        handleDeleteStudents,
        handleSearchStudents,
        handlePaginateStudents,
        handleSearchPaginateStudents
    }
}