

export function addApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item`;
        fetch(url, {
            method: 'POST',
            body: data,
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}


export function getApi() {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item`;
        fetch(url, {
            method: 'GET',
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}



export function updateApi(data, form) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/${data.payload.id}`;
        fetch(url, {
            method: 'PUT',
            body: form,
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}


export function delApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/${data.payload.id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function delOneApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item?index=${data.payload.index}&id=${data.payload.id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}


export function searchApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/search?nameSearch=${data.payload.nameSearch}`;
        fetch(url, {
            method: 'GET',
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function searchApi2(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/search/${data.payload.id}`;
        fetch(url, {
            method: 'GET',
        })
            .then((respone) => respone.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
