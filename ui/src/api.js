const endpoint = {
    protocol: 'http',
    host: 'localhost',
    port: 9000
};
const baseUrl = `${endpoint.protocol}://${endpoint.host}:${endpoint.port}`;

function base(url = '', config = {}) {
    const defaultConfig = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    return fetch(`${baseUrl}/${url}`, {
        ...defaultConfig,
        ...config
    })
        .then(res => res.json());
}

function get(url) {
    return base(url);
}

function create(url, data) {
    return base(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

function remove(url, id) {
    return base(`${url}/${id}`, {
        method: 'DELETE'
    });
}

export const api = {
    get,
    create,
    remove
};
