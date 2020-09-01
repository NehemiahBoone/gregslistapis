import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    let result = await api.get('houses')
    ProxyState.houses = result.data.data.map(h => new House(h))
  }

  async createHouse(rawHouse) {
    let result = await api.post('houses', rawHouse)
    let house = new House(result.data.data)
    ProxyState.houses = [...ProxyState.houses, house]
  }

  async removeHouse(id) {
    await api.delete(`houses/${id}`)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
}


const SERVICE = new HousesService()
export default SERVICE