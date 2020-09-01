import { ProxyState } from "../AppState.js"
import housesService from "../Services/HousesService.js"

function _drawHouses() {
  let houses = ProxyState.houses
  let template = ""
  houses.forEach(h => template += h.Template)
  document.getElementById('houseData').innerHTML = template
}


export default class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }

  getHouses() {
    try {
      housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  createHouse() {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    try {
      housesService.createHouse(rawHouse)
    } catch (error) {
      console.error(error)
    }
  }

  removeHouse(id) {
    try {
      housesService.removeHouse(id)
    } catch (error) {
      console.error(error)
    }
  }
}