export default class Job {
  constructor({ _id, company, jobTitle, hours, description, rate }) {
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.description = description || "No description"
    this.rate = rate
  }

  get Template() {
    return `
     <div class="col-4">
      <div class="card">
          <div class="card-body">
              <h4 class="card-title">${this.company} - ${this.jobTitle} - ${this.hours}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <p>$${this.rate.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>
    `
  }
}