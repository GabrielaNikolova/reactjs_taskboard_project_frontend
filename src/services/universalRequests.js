const universalRequest = async (method, url, data) =>{
    try {
        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || '{}');

        let headers = {};

        if (auth.accessToken){
            headers['X-Authorization'] = auth.accessToken;
        }

    }catch (err){
        console.log(err);
    }
};