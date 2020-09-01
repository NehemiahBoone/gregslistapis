import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {
  constructor() {
    console.log("service");
  }
}



const SERVICE = new JobsService()
export default SERVICE