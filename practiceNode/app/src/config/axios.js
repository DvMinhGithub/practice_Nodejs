import axios from 'axios';
import { contants } from '../contants';

export default function callApi(method, url, data, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: contants.URL + url,
      data: data,
      params: params,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
