import { PlusOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Popover, Table } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import callApi from '../../config/axios';
import { STORE } from '../../contants';
import { loadingState } from '../../recoil/store/app';

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
  const [openModalAdd, setOpenModalAdd] = useState(false)
  const nameRef = useRef(null)
  const [updateId, setUpdateId] = useState('')

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
          STORE.showNotification(false, 'Cannot get product list')
          setPageLoading(false);
        })
    }
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      title: 'Total employees ',
      key: 'employeesId',
      dataIndex: 'employeesId',
      render: (_, record) => <span className="department__total-emp">{record.employeesId?.length || 0} employees</span>
    },
    {
      title: 'ACTION',
      render: (_, item) => (
        <div className="department__row-action">
          <Popover trigger="click">
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
  const handleOpenModalAdd = () => {
    setOpenModalAdd(true)
  }
  const handleUpdateProduct = (id) => { }
  const handleAddProduct = () => { }
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
            className="department__search-btn"
            onClick={() => handleOpenModalAdd()}
          icon={<PlusOutlined />}
          > Add </Button>
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
          title="Add department"
          open={openModalAdd}
          onOk={() => {
            updateId ? handleUpdateProduct(updateId) : handleAddProduct();
          }}
          wrapClassName="add__department-modal"
          onCancel={() => setOpenModalAdd(false)}
          okText="Add"
        >
          <div style={{
            "marginBottom": "6px",
            "fontWeight": "500"
          }}>Name:</div>
          <Input ref={nameRef} placeholder="Enter department name" />
          {/* <div className="add__department-label">Code:</div>
          <Input ref={departmentCodeRef} placeholder="Enter department code" /> */}
        </Modal>
      </div>
    </>
  );
}
