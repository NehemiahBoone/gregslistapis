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
}