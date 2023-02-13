export default function addApi(data) {
 
 
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item`
        fetch(url, {
            method: 'POST',
            body: data
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res)
                
            })
            .catch((err) => {
                reject(err)
            })
    })
}

