import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Pagination, Row, Table } from 'react-bootstrap';
import { UseProduct } from "../../hooks";

export default function StudentComponent() {
  const {
    paginateProduct,
    totalPage, activePage,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    // handleSearchProduct,
    handlePaginateProduct,
    handleSearchPaginateProduct
  } = UseProduct();
  useEffect(() => {
    document.title = 'CRUD PAGES';
    handlePaginateProduct({ activePage: 1 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [nameSearch, setNameSearch] = useState('')
  let listButton = []
  for (let number = 1; number <= totalPage; number++) {
    listButton.push(
      <Pagination.Item key={number} active={number === activePage}
        onClick={() => {
          nameSearch !== '' ? handleSearchPaginateProduct({
            name: nameSearch, activePage: number
          }) : handlePaginateProduct({ activePage: number })
        }} >
        {number}
      </Pagination.Item>
    );
  }
  const [product, setProduct] = useState({
    id: '', name: '', color: 'white', size: 1, quantity: 1
  })

  const onChangeName = (e) => {
    setProduct({ ...product, name: e.target.value });
  };
  const onChangeColor = (e) => {
    setProduct({ ...product, color: e.target.value });
  };
  const onChangeSize = (e) => {
    setProduct({ ...product, size: e.target.value });
  };
  const onChangeQuantity = (e) => {
    setProduct({ ...product, quantity: e.target.value });
  };
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);
  return (
    <Row>
      {/* add product */}
      <Col>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control size='sm'
              type="text"
              placeholder="Enter the Product Name"
              onChange={(e) => onChangeName(e)}
            />
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>Color:</Form.Label>
            <Form.Control size='sm'
              type="text"
              placeholder="Enter the Product Color"
              onChange={(e) => onChangeColor(e)}
            />
          </Form.Group>
          <Form.Group controlId="size">
            <Form.Label>Size:</Form.Label>
            <Form.Control size='sm'
              type="number"
              placeholder="Enter the Product Size"
              onChange={(e) => onChangeSize(e)}
            />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control size='sm'
              type="number"
              placeholder="Enter the Product Quantity"
              onChange={(e) => onChangeQuantity(e)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() =>
            handleAddProduct(product)}>
            Add
          </Button>
        </Form>
        {/* Filter product */}
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Filter:</Form.Label>
            <Form.Control size='sm'
              type="text"
              placeholder="Filter by Product Name"
              value={nameSearch}
              onChange={(e) => {
                setNameSearch(e.target.value)
                handleSearchPaginateProduct({
                  name: e.target.value, activePage: 1
                })
              }}
            />
          </Form.Group>
          <Button variant="info" onClick={() => {
            setNameSearch('')
            handlePaginateProduct({ activePage: 1 })
          }}>
            Clear Filter
          </Button>
        </Form>
      </Col>
      <Col className="col-8">
        {/* List product */}
        <h3>List</h3>
        <Table striped bordered hover responsive size='small'>
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
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No paginateProduct here.
                </td>
              </tr>
            ) : (
              paginateProduct.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td colSpan="2">
                    <Button size='sm'
                      variant="secondary"
                      onClick={() => {
                        handleEditShow();
                        setProduct(item);
                      }}
                    >
                      Edit
                    </Button>{" "}
                    {" | "}
                    <Button size='sm'
                      variant="danger"
                      onClick={() => {
                        handleDeleteShow()
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
        </Table >
        <Pagination className='d-flex justify-content-center'>
          {listButton}</Pagination>

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
                  value={product.name}
                  onChange={(e) => onChangeName(e)}
                />
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Product Color"
                  defaultValue={product.color}
                  onChange={(e) => onChangeColor(e)}
                />
              </Form.Group>
              <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Product Size"
                  defaultValue={product.size}
                  onChange={(e) => onChangeSize(e)}
                />
              </Form.Group>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Product Quantity"
                  defaultValue={product.quantity}
                  onChange={(e) => onChangeQuantity(e)}
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
                handleEditClose()
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
                handleDeleteClose()
              }}
            >
              Yes, Do it.
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  )
}