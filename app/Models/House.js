export default class House {
  constructor({ _id, imgUrl, bedrooms, year, price, description, levels, bathrooms }) {
    this.id = _id
    this.imgUrl = imgUrl
    this.bedrooms = bedrooms
    this.year = year
    this.price = price
    this.description = description || 'No description'
    this.levels = levels
    this.bathrooms = bathrooms
  }

  get Template() {
    return `
     <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.bedrooms} - ${this.year} - ${this.levels} - ${this.bathrooms}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>
    `
  }
}