const backendUrl = process.env.API_URL || 'http://localhost:8080/api';

// source: https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257

function makeApiCall(subpath: string, config?: RequestInit) {
    return fetch(backendUrl)
    .then(response => {

    })
    // .catch(error => {
        
    // });
}

export default {}