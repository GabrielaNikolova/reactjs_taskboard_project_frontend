const universalRequest = async (method, url, data) => {
    try {
        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || '{}');

        let headers = {};

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let buildRequest;

        if (method = 'GET') {
            buildRequest = fetch(url, {headers});
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }

        const response = await buildRequest;

        console.log(response);

        const result = await response.json();

        return result;

    } catch (err) {
        console.log(err);
    }
};

export const get= universalRequest.bind({}, 'GET');
export const post= universalRequest.bind({}, 'POST');
export const put= universalRequest.bind({}, 'PUT');
export const del= universalRequest.bind({}, 'DELETE');