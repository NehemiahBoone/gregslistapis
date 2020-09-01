import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {
  constructor() {
    console.log("service");
  }

  async getJobs() {
    let result = await api.get('jobs')
    ProxyState.jobs = result.data.data.map(j => new Job(j))
  }

  async createJob(rawJob) {
    let result = await api.post('jobs', rawJob)
    let job = new Job(result.data.data)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }

  async removeJob() {

  }
}



const SERVICE = new JobsService()
export default SERVICE