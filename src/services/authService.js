export const register = (email, password, name) => {

    let url = "http://localhost:8080/api/auth/register";

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, name })
    })
    .then(data => data.json());
}

export const login = (email, password) => {

    let url = "http://localhost:8080/api/auth/login";

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(data => data.json());

}