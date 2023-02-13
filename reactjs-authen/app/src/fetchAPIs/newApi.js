import axios from 'axios';
import * as constants from "../constants"
export function resgister(data) {
    return new Promise((resolve, reject) => {
        axios.post(`${constants.DOMAIN}/register`, { ...data.payload }, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "Application/json"
            },
        })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    })
}

export function login(data) {
    console.error(data);
    return new Promise((resolve, reject) => {
        axios.post(`${constants.DOMAIN}/login`, { ...data.payload }, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "Application/json"
            },
        })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    })
}

export function getData() {
    return new Promise((resolve, reject) => {
        axios.get(`${constants.DOMAIN}/student`, { headers: { "authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => { resolve(res.data); console.warn(res.data); })
            .catch((err) => reject(err));
    })
}