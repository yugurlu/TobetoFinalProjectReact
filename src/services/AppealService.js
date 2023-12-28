import axios from "axios";
import Request from "../utilities/axios/axios";

export default new class AppealService
{
    constructor() {
        this.request = new Request({})
    }

    getAll() {
        return axios.get("http://localhost:5278/api/StudentAppeals?PageIndex=0&PageSize=100")
    }
}