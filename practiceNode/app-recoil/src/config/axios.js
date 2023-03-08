import axios from 'axios'

export default function callApi(method, url, data, params) {
  return new Promise(async (resolve, reject) => {
    let objAxios = {}
    if (method === 'get' || method === 'delete')
      objAxios = { method, params }
    else objAxios = { method, data }
    await axios({
      url: url,
      ...objAxios
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error.response.data)
      })
  })
}
