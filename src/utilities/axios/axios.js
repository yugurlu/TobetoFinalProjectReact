import axios from "axios";

export default class Request {
    constructor() {
        this.axios_request = axios.create({
            baseURL: 'http://localhost:5278/api',
        });
    } 
}
