import { ProxyState } from "../AppState.js"
import jobsService from "../Services/JobsService.js"

function _drawJobs() {
  let jobs = ProxyState.jobs
  let template = ""
  jobs.forEach(j => template += j.Template)
  document.getElementById('jobData').innerHTML = template
}

export default class JobsController {
  constructor() {
    console.log("controller")
  }
}