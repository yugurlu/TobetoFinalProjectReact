import axios from "axios";
import Request from "../utilities/axios/axios";

export default new class LectureService
{
    constructor() {
        this.request = new Request({})
    }

    getAll() {
        return axios.get("http://localhost:5278/api/ClassLectures?PageIndex=0&PageSize=100")
    }
}