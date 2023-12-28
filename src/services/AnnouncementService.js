import axios from "axios";
import Request from "../utilities/axios/axios";

export default new class AnnouncementService
{
    constructor() {
        this.request = new Request({})
    }

    getAll() {
        return axios.get("http://localhost:5278/api/ClassAnnouncements?PageIndex=0&PageSize=100")
    }
}