import {
  DeleteOutlined, EditOutlined, ExclamationCircleFilled, MoreOutlined, PlusOutlined, LogoutOutlined
} from '@ant-design/icons';
import { Button, Input, Modal, Popover, Table } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import callApi from '../../config/axios';
import { STORE } from '../../contants';
import { loadingState } from '../../recoil/store/app';
import { showNotification } from '../../utils'
import { accessTokenState } from '../../recoil/store/account';

const { Search } = Input;

export default function ProductPage() {
  const setPageLoading = useSetRecoilState(loadingState);
  const [listProduct, setListProduct] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5
    }
  })
  const [openModalAdd, setOpenModal] = useState(false)
  const nameRef = useRef('')
  const [updateId, setUpdateId] = useState('')
  const setAccessToken = useSetRecoilState(accessTokenState)

  useEffect(() => {
    const getProduct = () => {
      setPageLoading(true)
      const url = `${STORE.productUrl}`
      callApi('get', url)
        .then(res => {
          if (res.success)
            setListProduct(res.data)
          setPageLoading(false);
        })
        .catch(() => {
          showNotification('errorr', 'Cannot get product list')
          setPageLoading(false);
        })
    }
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showModalUpSert = (id) => {
    setUpdateId(id)
    setOpenModal(true)
  }

  const handleAddProduct = () => {
    const name = nameRef.current.input.value
    const url = `${STORE.productUrl}`

    callApi('post', url, { name })
      .then(res => {
        if (res.success) {
          setListProduct([res.data, ...listProduct]);
          showNotification('success', res.message);
        }
        setOpenModal(false);
      })
      .catch((error) => {
        showNotification('error', error.message);
        setOpenModal(false);
      });
  }

  const handleUpdateProduct = (id) => {
    const name = nameRef.current.input.value
    const url = `${STORE.productUrl}/${id}`
    callApi('put', url, { name })
      .then(res => {
        if (res.success) {
          setListProduct(preListProduct => {
            const index = preListProduct.findIndex(item => item._id === id)
            preListProduct[index] = { ...preListProduct[index], name }
            return preListProduct
          });
          showNotification('success', res.message);
        }
        setOpenModal(false);
      })
      .catch(() => {
        showNotification('error', 'Update product failed');
        setOpenModal(false);
      });
  }

  const hanldeDelete = idDelete => {
    Modal.confirm({
      title: 'Do you want to delete this product?',
      icon: <ExclamationCircleFilled />,
      onOk() {
        setPageLoading(true);
        const url = `${STORE.productUrl}/${idDelete}`;
        callApi('delete', url)
          .then(res => {
            console.log("file: product.jsx:112 ~ res", res);
            if (res.success) {
              setListProduct(preListProduct => preListProduct.filter(product => product._id !== idDelete));
              showNotification('success', 'Delete product success');
            }
            setPageLoading(false);
          })
          .catch((error) => {
            console.log("file: product.jsx:107 ~ error", error);
            showNotification('error', 'Delete product failed');
            setPageLoading(false);
          });
      },
      onCancel() {
        return;
      }
    });
  };

  const content = id => {
    return (
      <div style={{ "padding": "10px" }}>
        <div>
          <EditOutlined style={{ "paddingRight": "10px" }} />
          <span onClick={() => showModalUpSert(id)}>Edit</span>
        </div>
        <div
          onClick={() => {
            hanldeDelete(id);
          }}
        >
          <DeleteOutlined style={{ "paddingRight": "10px" }} />
          <span>Delete</span>
        </div>
      </div>
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Color',
      dataIndex: 'color',
    },
    {
      title: 'Size',
      dataIndex: 'size',
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'ACTION',
      render: (_, item) => (
        <div>
          <Popover content={content(item._id)} trigger="click">
            <MoreOutlined />
          </Popover>
        </div>
      )
    }
  ];
  const getDataSource = () => {
    return listProduct.filter(
      item => item.name?.indexOf(searchValue) >= 0
    ).map(item => ({
      ...item, key: item._id
    }));
  };
  const handleLogout = () => {
    Modal.confirm({
      title: 'Do you want to delete this product?',
      icon: <ExclamationCircleFilled />,
      onOk() {
        setAccessToken('')
        showNotification('info', 'You are logged out');
      },
      onCancel() {
        return;
      }
    });

  }
  return (
    <>
      <div style={{
        "padding": "15px 28px 0px",
        "backgroundColor": "#f3f0f0"
      }}>
        <div style={{
          "display": "flex",
          "justifyContent": "flex-end",
          "gap": "12px",
          "marginBottom": "20px"
        }}>
          <Search
            placeholder="input search text"
            allowClear
            onChange={e => setSearchValue(e.target.value)}
            style={{
              "display": "flex",
              "justifyContent": "flex-end",
              "gap": "12px",
              "width": "25%",
            }}
          />
          <Button
            className="product__search-btn"
            onClick={() => showModalUpSert()}
            icon={<PlusOutlined />}
          > Add </Button>
          <Button
            className="product__search-btn"
            onClick={() => handleLogout()}
            icon={< LogoutOutlined />}
          > Logout </Button>
        </div>
        <Table
          columns={columns}
          dataSource={getDataSource()}
          size="small"
          pagination={{
            ...tableParams.pagination,
            position: ['bottomCenter']
          }}
          onChange={page => {
            setTableParams({ ...tableParams.pagination, current: page })
          }}
        />

        <Modal
          title="Add product"
          open={openModalAdd}
          onOk={() => {
            updateId ? handleUpdateProduct(updateId) : handleAddProduct();
          }}
          onCancel={() => setOpenModal(false)}
          okText="Add"
        >
          <div style={{
            "marginBottom": "6px",
            "fontWeight": "500"
          }}>Name:</div>
          <Input ref={nameRef} placeholder="Enter product name" />
          <div style={{
            "marginBottom": "6px",
            "fontWeight": "500"
          }}>Color:</div>
          <Input ref={nameRef} placeholder="Enter product color" />
        </Modal>
      </div>
    </>
  );
}
