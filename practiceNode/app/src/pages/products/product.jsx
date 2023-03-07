import { ExportOutlined, FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Modal,
  Pagination,
  Row,
  Table
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UseProduct } from '../../hooks';

function getItem(label, key, icon, path) {
  return (
    <Menu.Item key={key}>
      {icon}
      <span>{label}</span>
      {path}
      {/* <Link to={path} /> */}
    </Menu.Item>)
  // return {
  //   key,
  //   icon,
  //   children,
  //   label,
  // };
}
const items = [
  getItem('Home', '1', <PieChartOutlined />,),
  getItem('User', 'sub1', <UserOutlined />,),
  getItem('Files', '9', <FileOutlined />),
  getItem('Logout', '10', <ExportOutlined />, <Link to='/login' />),
];


export default function ProductPage() {
  const {
    paginateProduct,
    totalPage,
    activePage,

    handleAddProduct,
    updateProduct,
    deleteProduct,
    handlePaginateProduct,
    handleSearchPaginateProduct,
  } = UseProduct();

  useEffect(() => {
    document.title = 'CRUD PAGES';
    handlePaginateProduct({ activePage: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [nameSearch, setNameSearch] = useState('');
  const paginateBtn = [];
  for (let number = 1; number <= totalPage; number++) {
    paginateBtn.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() =>
          nameSearch !== ''
            ? handleSearchPaginateProduct({
              name: nameSearch,
              activePage: number,
            })
            : handlePaginateProduct({ activePage: number })
        }
      >
        {number}
      </Pagination.Item>
    );
  }
  const [product, setProduct] = useState({
    id: '',
    name: '',
    color: 'white',
    size: 1,
    quantity: 1,
  });
  const keys = Object.keys(product);

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct(preProduct => ({
      ...preProduct, [name]: value
    }))
  }
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);
  const handleUpdateProduct = (product) => {
    updateProduct(product)
    handleEditClose();
  }
  const handleDeleteProduct = (id) => {
    deleteProduct(id)
    handleDeleteClose();
  }

  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    // window.location.href = '/'
  }
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div
            style={{
              height: 32,
              margin: 16,
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />   */}
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            {items}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
              items={[{ title: 'Home' }, { title: 'Product' }]}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Row>
                {/* add product */}
                <Col>
                  <Form>
                    <Form.Group controlId="name">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Enter the Product Name"
                        name='name'
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="color">
                      <Form.Label>Color:</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Enter the Product Color"
                        name='color'
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="size">
                      <Form.Label>Size:</Form.Label>
                      <Form.Control
                        size="sm"
                        type="number"
                        placeholder="Enter the Product Size"
                        name='size'
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="quantity">
                      <Form.Label>Quantity:</Form.Label>
                      <Form.Control
                        size="sm"
                        type="number"
                        placeholder="Enter the Product Quantity"
                        name='quantity'
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button variant="primary" onClick={() => handleAddProduct(product)}>
                      Add
                    </Button>
                  </Form>
                  {/* Filter product */}
                  <Form>
                    <Form.Group controlId="name">
                      <Form.Label>Filter:</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Filter by Product Name"
                        value={nameSearch}
                        onChange={e => {
                          setNameSearch(e.target.value);
                          handleSearchPaginateProduct({
                            name: e.target.value,
                            activePage: 1,
                          });
                        }}
                      />
                    </Form.Group>
                    <Button
                      variant="info"
                      onClick={() => {
                        setNameSearch('');
                        handlePaginateProduct({ activePage: 1 });
                      }}
                    >
                      Clear Filter
                    </Button>
                  </Form>
                </Col>
                <Col className="col-8">
                  {/* List product */}
                  <h3>List</h3>
                  <Table striped bordered hover responsive size="small">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!paginateProduct.length ? (
                        <tr>
                          <td colSpan="5" style={{ textAlign: 'center' }}>
                            No paginateProduct here.
                          </td>
                        </tr>
                      ) : (
                        paginateProduct.map((item) => (
                          <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.size}</td>
                            <td>{item.quantity}</td>
                            <td colSpan="2">
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => {
                                  handleEditShow();
                                  setProduct(item);
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={() => {
                                  handleDeleteShow();
                                  setProduct(item);
                                }}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                  <Pagination className="d-flex justify-content-center">
                    {paginateBtn}
                  </Pagination>

                  {/* Edit modal */}
                  <Modal show={showEdit} onHide={handleEditClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit the Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group controlId="name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter the Product Name"
                            defaultValue={product.name}
                            name={keys[1]}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="color">
                          <Form.Label>Color</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter the Product Color"
                            defaultValue={product.color}
                            name={keys[2]}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="size">
                          <Form.Label>Size</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter the Product Size"
                            defaultValue={product.size}
                            name={keys[3]}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="quantity">
                          <Form.Label>Quantity</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter the Product Quantity"
                            defaultValue={product.quantity}
                            name={keys[4]}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => handleEditClose()}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleUpdateProduct(product)
                        }}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit the Product</Modal.Title>
                    </Modal.Header>
                  </Modal>

                  {/* Delete modal */}
                  <Modal show={showDelete} onHide={handleDeleteClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete the Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => handleDeleteClose()}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleDeleteProduct(product._id)
                        }}
                      >
                        Yes, Do it.
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
