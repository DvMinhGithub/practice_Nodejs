import {DOMAIN, HTTP_HEADER_JSON, LIMIT} from '../constants'

export function paginateApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}/paginate?activePage=${data.payload.activePage}&limit=${LIMIT}`)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
}

export function addApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}/add`, { method: 'POST', headers: HTTP_HEADER_JSON, body: JSON.stringify(data) })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
}

export function updateApi(data, form) { console.warn('api update', data, '\nform', form) 
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}/${data.payload.id}`, { method: 'PUT', body: form })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
}

export function delApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}/${data.payload.id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
}

export function searchApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}/search?activePage=${data.payload.activePage}&limit=${LIMIT}&textSearch=${data.payload.nameSearch}`)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
}
