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
    ProxyState.on('jobs', _drawJobs)
    this.getJobs()
  }

  getJobs() {
    try {
      jobsService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }

  createJob() {
    event.preventDefault()
    let form = event.target
    let rawJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      rate: form.rate.value
    }
    try {
      jobsService.createJob(rawJob)
    } catch (error) {
      console.error(error)
    }
  }

  removeJob() {
    try {
      jobsService.removeJob()
    } catch (error) {
      console.error(error)
    }
  }
}