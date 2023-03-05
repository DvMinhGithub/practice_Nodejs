import axios from "axios";
import { STORE } from "../contants";

export default function callApi(method, url, data , params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: STORE.URL + url,
      data: data.payload,
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}