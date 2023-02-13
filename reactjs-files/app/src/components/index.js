import React from 'react';

export default class Index extends React.Component {
    state = {
        fileImg: [],
        id: '',
        linkImg: [],
        nameSearch: '',
        nameUpdate: '',
        name: '',
        checks: false,
    };
    handleReview(file) {
        let arrImg = [];
        for (let i = 0; i < file.length; i++) {
            arrImg.push(URL.createObjectURL(file[i]));
        }
        this.setState({ fileImg: file, linkImg: arrImg });
    }
    render() {
        let listData = [], listSearch = [], listSearch2 = [];

        if (this.props.itemSearch2) {
            listSearch2 = this.props.itemSearch2.map(item => {

                return (
                    <tr key={item._id}>
                        <td width="500px">1</td>
                        <td>{item.name}</td>
                        <td>{item.img.map((value, key) => {
                            return (<div key={key}>
                                <img src={value} width={90} height={90} alt={key}></img></div>)
                        })}</td> </tr>)

            })

        }

        if (this.props.itemSearch) {
            listSearch = this.props.itemSearch.map((item, key) => {
                return (<tr key={item._id} onClick={() => {
                    this.props.searchItem2({ id: item._id });
                    this.setState({ checks: true })
                }}>
                    <td style={{ width: '350px' }}>{item.name}</td>
                    <td>{item.img.map((value, key) => {
                        return (<div key={key}>
                            <img src={value} width={90} height={90} alt='Error alt'></img></div>)
                    })}</td>
                </tr>)
            })
        }


        if (this.props.itemFile) {
            listData = this.props.itemFile.map((item, key) => {
                return (
                    <tr key={item._id} >
                        <th>{key + 1}</th>
                        <th>{item.name}</th>
                        <th>{item.img.map((value, key) => {
                            return (
                                <div key={key}>
                                    <img alt="error images" src={value} width={90} height={90}></img>
                                    <button onClick={() => item.img.length > 1 ?
                                        this.props.deleteOne({ index: key, id: item._id }) :
                                        this.props.deleteItem({ id: item._id })
                                    }>x</button>
                                </div>
                            )
                        })}</th>
                        <th><button onClick={() => this.props.deleteItem({ id: item._id })}>DELETE</button></th>
                        <th><button onClick={() => {
                            this.setState({ id: item._id, linkImg: item.img, nameUpdate: item.name })
                        }}>Choose</button></th>
                    </tr>
                )
            })
        } return (
            <div>
                <div>
                    {this.state.linkImg.map((link, index) => {
                        return (
                            <div key={index}>
                                <span>
                                    <img
                                        src={link}
                                        alt="error images"
                                        width={90}
                                        heigth={90}></img>
                                </span>
                            </div>
                        );
                    })}
                </div>
                <input
                    multiple
                    type="file"
                    onChange={(e) => {
                        this.handleReview(e.target.files);
                    }} />
                <br></br>
                <input
                    type="text" style={{ width: '400px' }}
                    onChange={(e) =>
                        this.setState({ name: e.target.value })
                    } />
                <button
                    onClick={() => {
                        this.state.name === '' ||
                            this.state.fileImg.length === 0
                            ? alert('Yeu cau nhap du lieu va ten')
                            : this.props.addItem({
                                name: this.state.name,
                                img: this.state.fileImg,
                            });
                    }}>
                    Add
                </button>

                <br></br>
                <input style={{ width: '400px' }}
                    value={this.state.nameUpdate}
                    onChange={(e) => {
                        this.setState({ nameUpdate: e.target.value });
                    }} />
                <button
                    onClick={() => {
                        this.state.nameUpdate === ''
                            ? alert('Yeu cau nhap ten')
                            : this.props.updateItem({
                                id: this.state.id,
                                img: this.state.fileImg,
                                name: this.state.nameUpdate,
                            });
                    }}>
                    Update
                </button>
                <br></br>

                <input
                    style={{ position: 'relative', width: '400px' }}
                    type="text"
                    onChange={(e) => {
                        this.setState({ nameSearch: e.target.value });
                        this.props.searchItem1({ nameSearch: e.target.value });
                    }}
                />

                {/* Results for search */}
                <div
                    style={{
                        visibility: this.state.nameSearch
                            ? 'visible'
                            : 'hidden',
                        position: 'absolute',
                        backgroundColor: 'lime',
                        width: '400px',
                    }}>
                    <table>
                        <tbody>{listSearch}</tbody>
                    </table>
                </div>
                <button
                    onClick={() => {
                        this.props.searchItem({
                            nameSearch: this.state.nameSearch,
                        });
                    }}>
                    Search
                </button>
                <div style={{ paddingTop: '150px' }}>
                    <table >
                        <tbody>
                            <tr>
                                <th width="20%">ID</th>
                                <th width="20%">Name</th>
                                <th width="40%">Images</th>
                                <th colSpan={2}></th>
                            </tr>

                            {this.state.checks === true ? listSearch2 : listData}
                        </tbody>

                    </table></div>
            </div>
        );
    }
}
