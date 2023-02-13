import { Table, Form, InputGroup, Button, Pagination } from 'react-bootstrap';
import { UseStudent } from "../hooks"
import { useEffect, useState } from 'react'
const LIMIT = 3
export default function StudentComponent() {
    const {
        // listStudents,
        paginateUsers,
        totalPages, activePage,
        handleGetStudents,
        handleAddStudents,
        handleUpdateStudents,
        handleDeleteStudents,
        // handleSearchStudents,
        handlePaginateStudents,
        handleSearchPaginateStudents
    } = UseStudent();

    useEffect(() => {
        document.title = 'CRUD PAGES';
        handleGetStudents()
        handlePaginateStudents({ activePage: 1 })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [person, setPerson] = useState({ name: '', id: '' })
    const [nameSearch, setNameSearch] = useState('')
    let listButton = []

    for (let number = 1; number <= totalPages; number++) {
        listButton.push(
            <Pagination.Item key={number} active={number === activePage}
                onClick={() => {
                    nameSearch !== '' ? handleSearchPaginateStudents({
                        name: nameSearch, activePage: number
                    }) : handlePaginateStudents({ activePage: number })
                    //setCurrPage(number)
                }}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div style={{ padding: "20px" }}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    onChange={e => setPerson({ ...person, name: e.target.value })}
                    value={person.name}
                />
                <Form.Control
                    placeholder="Recipient's search"
                    onChange={e => setNameSearch(e.target.value)}
                    value={nameSearch}
                />
                <Button variant="outline-secondary"
                    onClick={() => handleAddStudents({ name: person.name })}  >
                    Add
                </Button>
                <Button variant="outline-secondary"
                    onClick={() => { handleUpdateStudents({ id: person.id, name: person.name }); setPerson({ ...person, name: '' }) }} >
                    Update
                </Button>
                <Button variant="outline-secondary"
                    onClick={() => { handleSearchPaginateStudents({ name: nameSearch, activePage: 1 }) }} >
                    Search
                </Button>
            </InputGroup>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginateUsers.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td >{(activePage - 1) * LIMIT + index + 1}</td>
                                    <td >{item._id}</td>
                                    <td >{item.name}</td>
                                    <td ><button onClick={() =>
                                        handleDeleteStudents({ id: item._id })
                                    }>Delete</button></td>
                                    <td ><button onClick={() =>
                                        setPerson({ name: item.name, id: item._id })
                                    }>Edit</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
            <Pagination>{listButton}</Pagination>
        </div >
    )
}