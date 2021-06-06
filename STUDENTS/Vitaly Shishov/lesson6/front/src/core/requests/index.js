let token = localStorage.tokenAuth;
token = token ? token : null;

export function get(url) {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(data => data.json())
}

export function post(url, item) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(data => data.json())
}

export function put(url, item) {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(data => data.json())
}

export function deleteReq(url) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(data => data.json())
}
