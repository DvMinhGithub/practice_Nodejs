import axios from 'axios';
const DOMAIN = 'http://localhost:3001/', LIMIT = 3

export function getApi() {
    return new Promise((resolve, reject) => {
        axios.get(`${DOMAIN}`)
            .then(res => { resolve(res.data); })
            .catch((err) => reject(err))
    })
}

export function addApi(data) {
    return new Promise((resolve, reject) => {
        axios.post(`${DOMAIN}`, { ...data.payload })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

export function updateApi(data) {
    return new Promise((resolve, reject) => {
        axios.put(`${DOMAIN}${data.payload.id}`, { ...data.payload })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

export function deleteApi(data) {
    return new Promise((resolve, reject) => {
        axios.delete(`${DOMAIN}${data.payload.id}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}

export function searchApi(data) {
    return new Promise((resolve, reject) => {
        axios.get(`${DOMAIN}search`, { params: { name: data.payload.name } })
            .then((res) => { resolve(res.data); })
            .catch((err) => reject(err));
    })
}

export function paginateApi(data) {

    return new Promise((resolve, reject) => {
        axios.get(`${DOMAIN}pagination`, {
            params: {
                activePage: data.payload.activePage,
                limit: LIMIT
            }
        })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

export function searchPaginateApi(data) {
    return new Promise((resolve, reject) => {
        axios.get(`${DOMAIN}searchPaginate`, {
            params: {
                activePage: data.payload.activePage,
                limit: LIMIT,
                name: data.payload.name
            }
        })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}