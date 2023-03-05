import axios from 'axios';
import { STORE } from '../contants';

export const Api = {
  getApi: () => {
    return new Promise((resolve, reject) => {
      axios.get(`${STORE.URL}`)
        .then(res => { resolve(res.data); })
        .catch((err) => reject(err));
    });
  },
  addApi: (data) => {
    return new Promise((resolve, reject) => {
      axios.post(`${STORE.URL}`, { ...data.payload })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  },
  addApiV2: (data) => {
    return new Promise((resolve, reject) => {
      axios({ method: 'post', url: `${STORE.URL}`, data: { ...data.payload } })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  },
  updateApi: (data) => {
    return new Promise((resolve, reject) => {
      axios.put(`${STORE.URL}${data.payload._id}`, { ...data.payload })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  },
  deleteApi: (data) => {
    return new Promise((resolve, reject) => {
      axios.delete(`${STORE.URL}${data.payload}`)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  searchApi: (data) => {
    return new Promise((resolve, reject) => {
      axios.get(`${STORE.URL}search`, { params: { name: data.payload.name } })
        .then((res) => { resolve(res.data); })
        .catch((err) => reject(err));
    });
  },
  paginateApi: (data) => {
    return new Promise((resolve, reject) => {
      axios.get(`${STORE.URL}/paginate`, {
        params: {
          activePage: data.payload.activePage,
          limit: STORE.LIMIT
        }
      })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  },
  searchPaginateApi: (data) => {
    return new Promise((resolve, reject) => {
      axios.get(`${STORE.URL}searchPaginate`, {
        params: {
          activePage: data.payload.activePage,
          limit: STORE.LIMIT,
          textSearch: data.payload.name
        }
      })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
};
