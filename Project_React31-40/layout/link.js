const url = "http://127.0.0.1:8000/api";
let token = "HU38YmKH7X9pKu7bb2oJxxbIGZACWwMja53YwmDS";

export const link = axios.create({
    baseURL : url,
    headers:{
        'api_token' : token
    }
});