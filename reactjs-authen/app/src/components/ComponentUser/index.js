import React, { useState, useEffect } from "react";
import { Table, Button, InputGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import UseUser from "../../hooks/useUser";

export default function ComponentUser() {
    const {
        items,
        initLoad,
        searchItem
    } = UseUser();

    useEffect(() => {
        initLoad()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [nameSearch, setNameSearch] = useState('')
    let listData = []
    if (items) {
        listData = items.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                </tr>
            )
        })
    }

    return (
        <div style={{ padding: "20px" }}>
            <Helmet>
                <title>Người dùng</title>
            </Helmet>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    onChange={(e) => { setNameSearch(e.target.value) }}
                />
                <Button variant="outline-secondary"
                    onClick={() => { searchItem({ nameSearch: nameSearch }) }}>
                    Search
                </Button>
            </InputGroup>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.length !== 0 ? listData : <tr><td colSpan={4}><p>Không có dữ liệu trả về</p></td></tr>}
                </tbody>
            </Table>
            <Button onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                window.location.href = '/'
            }}>Đăng xuất</Button>
        </div>
    )
}


