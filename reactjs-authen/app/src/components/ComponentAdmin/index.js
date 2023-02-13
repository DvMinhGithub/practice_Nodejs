import React from "react";
import { useState, useEffect } from "react";
import { Table, Button, InputGroup, Form, FloatingLabel } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

// import useAdmin from '../../hooks/useAdmin'
import UseUser from "../../hooks/useUser";
export default function ComponentAdmin() {

    // const {
    //     // items,
    //     // initLoad,
    //     addItem,
    //     updateItem,
    //     deleteItem,
    //     // searchItem
    // } = useAdmin();

    const {
        items,
        initLoad,
        addItem,
        updateItem,
        deleteItem,
        searchItem
    } = UseUser();
    useEffect(() => {
        initLoad()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [nameAdd, setNameAdd] = useState('')
    const [update, setUpdate] = useState({ id: '', name: '' })
    const [nameSearch, setNameSearch] = useState('')

    let listData = []
    if (items) {
        listData = items.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>
                        <Button
                            onClick={() => { setUpdate({ id: item._id, name: item.name }) }}>Edit</Button></td>
                    <td>
                        <Button variant="danger"
                            onClick={() => { deleteItem({ id: item._id }) }}>Delete</Button></td>
                </tr>
            )
        })
    }
    return (
        <div style={{ padding: "20px" }}>
            <Helmet>
                <title>Admin</title>
            </Helmet>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Add username"
                    onChange={(e) => { setNameAdd(e.target.value) }}
                />
                <Button variant="outline-primary"
                    onClick={() => { addItem({ nameAdd: nameAdd }) }}>
                    Add
                </Button>
                <Form.Control
                    placeholder="Update username"
                    value={update.name}
                    onChange={(e) => { setUpdate({ ...update, name: e.target.value }) }}
                />
                <Button variant="outline-primary"
                    onClick={() => { updateItem({ id: update.id, name: update.name }) }}>
                    Update
                </Button>
                <Form.Control
                    placeholder="Search username"
                    onChange={(e) => { setNameSearch(e.target.value) }}
                />
                <Button variant="outline-primary"
                    onClick={() => { searchItem({ nameSearch: nameSearch }) }}>
                    Search
                </Button>
            </InputGroup>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.length !== 0 ? listData : <tr><td colSpan={4}><p>Không có dữ liệu trả về</p></td></tr>}
                </tbody>
            </Table>
            <Button onClick={() => {
                localStorage.removeItem("token")
                localStorage.removeItem("role")
                window.location.href = '/'
            }}>Đăng xuất</Button>
        </div>
    )
}
