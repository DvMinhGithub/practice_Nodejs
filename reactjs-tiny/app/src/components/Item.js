import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Table } from 'react-bootstrap';
import Tiny from './Tiny';

class Items extends React.Component {
    state = {
        id: '',
        content: '',
        idReadMore: '',
    }
    render() {
        let listData = [], listButton = []
        for (let i = 1; i <= this.props.totalPage; i++) {
            listButton.push(i)
        }

        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{key + 1}</th>
                        <th>{item.title}</th>
                        <th style={{ display: this.state.idReadMore === item._id ? 'inline-block' : 'none' }} dangerouslySetInnerHTML={{ __html: item.content }}></th>
                        <th><button style={{ visibility: this.state.idReadMore !== item._id ? 'visible' : 'hidden' }}
                            onClick={() => { this.setState({ idReadMore: item._id }) }}>ReadMore</button></th>
                        <th><button style={{ visibility: this.state.idReadMore === item._id ? 'visible' : 'hidden' }}
                            onClick={() => { this.setState({ idReadMore: '' }) }}>ReadLess</button></th>
                        <th><button
                            onClick={() => { this.props.delItem({ id: item._id }) }}>DELETE</button></th>
                        <th><button
                            onClick={() => { this.setState({ id: item._id, content: item.content, title: item.title, idReadMore: item._id }) }}>Choose</button></th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <input onChange={(e) => { this.setState({ nameSearch: e.target.value }) }}></input>
                <button onClick={() => { this.props.searchPaginate({ nameSearch: this.state.nameSearch, activePage: 1 }) }}>Search</button>
                <Table striped bordered hover className="text-center">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th >Images</th>
                            <th></th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                        {listData}
                    </tbody>
                </Table>
                {listButton.map((item, key) => {
                    return (
                        <button key={key}
                            style={{ backgroundColor: this.props.activePage === item ? 'red' : 'white' }}
                            onClick={() => {
                                this.props.nameSearch ?
                                    this.props.searchPaginate({ nameSearch: this.props.nameSearch, activePage: item }) :
                                    this.props.paginateItem({ activePage: item })
                            }}>{item}</button>
                    )
                })}
                <Tiny addTiny={this.props.addItem}
                    updateTiny={this.props.updateItem}
                    id={this.state.id}
                    title={this.state.title}
                    content={this.state.content}
                ></Tiny>
            </div>

        )
    }
}
export default Items