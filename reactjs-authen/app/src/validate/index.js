export function checkUserName(data) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
        return (true)
    } else {
       // return (false)
       return true
    }
}

export function CheckPassword(data) {
    if (data.length >= 1) {
        return true;
    }
    else {
        return false;
    }
}